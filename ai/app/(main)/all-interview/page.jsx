"use client";
// Importing necessary modules and components
import { useUser } from "@/app/provider";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import { Camera, Video } from "lucide-react";
import React, { useEffect, useState } from "react";
import InterviewCard from "../dashboard/_components/InterviewCard";

// Function to display all previously created interviews
function AllInterview() {
  // State to store the list of interviews
  const [interviewList, setInterviewList] = useState([]);
  // Destructuring the user from the useUser hook
  const { user } = useUser();

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    let { data: interviews, error } = await supabase
      .from("interviews")
      .select("*")
      .eq("userEmail", user?.email)
      .order("id", { ascending: false })
      .limit(6);

    console.log(interviews);
    setInterviewList(interviews);
  };

  return (
    <div className="my-5">
      <h2 className="text-2xl font-bold">All Previously Created Interviews</h2>
      {interviewList?.length == 0 && (
        <div className="p-5 flex flex-col gap-2 items-center bg-blue-100 mt-3 rounded-lg">
          <Video className="text-primary bg-blue-50 rounded-lg p-3 w-12 h-12" />
          <h2>You don't have any interview created!</h2>
          <Button>Create New Interview</Button>
        </div>
      )}

      {interviewList && (
        <div className="grid grid-cols-2 mt-5  xl:grid-cols-3 gap-5 ">
          {interviewList.map((interview, index) => (
            <InterviewCard
              interview={interview}
              key={index}
              showCandidates={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllInterview;