import { useUser } from "@/app/provider";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import axios from "axios";
import { Loader2, Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';

function QuestionList({ formData , onCreateLink}) {
  const [loading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState();
  const {user} = useUser();
  const [saveLoading, setSaveLoading] = useState(false);
  useEffect(() => {
    if (formData) {
      GenerateQuestionList();
    }
  }, [formData]);

  const GenerateQuestionList = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/ai-model", {
        ...formData,
      });
      console.log(result.data.content);
      // const Content = JSON.parse(result.data.content);
      const Content = result.data.content;
      const FINAL_CONTENT = Content.replace("```json", "").replace("```", "");
      // setQuestionList(Content);
      setQuestionList(JSON.parse(FINAL_CONTENT)?.interviewQuestions);
      setLoading(false);
    } catch (error) {
      toast("server error, Try Again!");
      setLoading(false);
    }
  };

  const onFinish = async () => {
    setSaveLoading(true);
    const interview_id = uuidv4();
    const { data, error } = await supabase
      .from("interviews")
      .insert([
        {
          ...formData,
          questionList: questionList,
          userEmail: user?.email,
          interview_id: interview_id,
        },
      ])
      .select();

      // Update user credits
      const userUpdate = await supabase
      .from("Users")
      .update({ credits:Number (user?.credits) - 1 })
      .eq("email", user?.email)
      .select();

      console.log(userUpdate);
    setSaveLoading(false);
      console.log(data, error);
    if (error) {
      toast.error("Error creating interview, try again!");
    }
    if (data) {
      toast.success("Interview Created Successfully!");
    }

    onCreateLink(interview_id);
  };

  return (
    <div>
      {loading && (
        <div className="p-5 bg-blue-50 rounded-xl border border-primary flex gap-5 items-center">
          <Loader2Icon className="animate-spin" />
          <div>
            <h2 className="font-medium">Generating Interview Questions</h2>
            <p className="text-primary">
              Our AI is Crafting personalized questions bases on your job
              position
            </p>
          </div>
        </div>
      )}
      {questionList?.length > 0 && (
        <div>
          <h2 className="font-bold text-xl ">Generated Interview Questions:</h2>
          <div className="flex flex-col bg-white gap-2  p-5 rounded-lg border border-primary mt-2">
            {questionList.map((item, index) => (
              <div key={index} className="p-2 bg-white rounded-md shadow-sm">
                <h3 className="font-semibold">{item.question}</h3>
                <p className="text-sm text-primary">Type: {item.type}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-3 flex justify-end">
        <Button onClick={() => onFinish()} disabled={saveLoading}>
          {saveLoading && <Loader2 className="animate-spin mr-2" />}Create Interview Link & Finish</Button>
      </div>
    </div>
  );
}

export default QuestionList;
