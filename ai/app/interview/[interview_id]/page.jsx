"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Info, Loader2Icon, Video } from "lucide-react"; // for info icon
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import { useParams, useRouter } from "next/navigation";
import { InterviewDataContext } from "@/context/InterviewDataContext";

function Interview() {
  const { interview_id } = useParams();
  const [interviewData, setInterviewData] = useState();
  const [userName, setUserName] = useState();
  const [loading, setLoading] = useState(false);
  const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);
  const router = useRouter();

  useEffect(() => {
    interview_id && GetInterviewDetails();
  }, [interview_id]);

  const GetInterviewDetails = async () => {
    setLoading(true);
    try {
      let { data: Interviews, error } = await supabase
        .from("interviews")
        .select("jobPosition, jobDescription, duration, type")
        .eq("interview_id", interview_id);
      setInterviewData(Interviews[0]);
      setLoading(false);
      if (Interviews?.length == 0) {
        toast("Interview not found");
      }
    } catch (e) {
      setLoading(false);
      toast("Incorrect Interview Link");
    }
  };

  const onJoinInterview = async () => {
    setLoading(true);
    let { data: Interviews, error } = await supabase
      .from("interviews")
      .select("*")
      .eq("interview_id", interview_id);

    console.log(Interviews[0]);

    setInterviewInfo({
        userName: userName,
        interviewData: Interviews[0],
    });
    router.push('/interview/' + interview_id + '/start');
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-6 bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl w-full border border-gray-200">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2504/2504947.png" // Example logo (microphone icon)
            alt="AIcruiter Logo"
            className="h-12 mb-2"
          />
          <p className="text-gray-500 text-sm">AI-Powered Interview Platform</p>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mb-8">
          <img
            src="/interview.png" // Illustration matching your style
            alt="Interview Illustration"
            className="w-72 h-48 object-contain"
          />
        </div>

        {/* Title and Duration */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            {interviewData?.jobPosition}
          </h2>
          <div className="flex items-center justify-center text-gray-500 text-sm mt-1">
            ⏱️ {interviewData?.duration}
          </div>
        </div>

        {/* Full Name Input */}
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="fullName"
          >
            Enter your full name
          </label>
          <input
            id="fullName"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            // value={userName}
            placeholder="e.g. John Smith"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Before You Begin Tips */}
        <div className="bg-blue-50 p-5 rounded-lg text-sm text-gray-700 border border-blue-200">
          <div className="flex items-center mb-2 font-semibold">
            <Info className="w-4 h-4 mr-2 text-blue-500" />
            Before you begin
          </div>
          <ul className="list-disc list-inside text-blue-600 space-y-1 mt-2">
            <li>
              <a href="#" className="hover:underline">
                Test your camera and microphone
              </a>
            </li>
            <li>Ensure you have a stable internet connection</li>
            <li>Find a Quiet place for interview</li>
          </ul>
        </div>

        <div className="flex items-end mt-5">
          <Button
            disabled={loading || !userName}
            onClick={() => onJoinInterview()}
          >
            <Video />
            {loading && <Loader2Icon/>}
            Join Interview
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Interview;
