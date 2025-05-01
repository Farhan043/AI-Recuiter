import { Calendar, Clock, Tag } from "lucide-react";
import moment from "moment";
import React from "react";

function InterviewDetailContainer({ interviewDetail }) {
  return (
    <div className="p-5 font-bold bg-white rounded-lg border">
      <h2 className="text-lg text-center">{interviewDetail?.jobPosition}</h2>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <h2 className="text-sm text-gray-500">Duration</h2>
          <h2 className="flex text-md font-bold items-center gap-2">
            <Clock className="w-4 h-4" />
            {interviewDetail?.duration}
          </h2>
        </div>

        <div>
          <h2 className="text-sm text-gray-500">CreatedOn</h2>
          <h2 className="flex text-md font-bold items-center gap-2">
            <Calendar className="w-4 h-4" />
            {moment(interviewDetail?.created_at).format("MMM DD, yyyy")}
          </h2>
        </div>

        {interviewDetail?.type && (
          <div>
            <h2 className="text-sm text-gray-500">Type</h2>
            <h2 className="flex text-md font-bold items-center gap-2">
              <Tag className="w-4 h-4" />
              {JSON.parse(interviewDetail?.type)[0]}
            </h2>
          </div>
        )}
      </div>

      <div className="mt-5">
        <h2 className="font-bold">Job Description</h2>
        <p className="text-sm leading-6">{interviewDetail?.jobDescription}</p>
      </div>

      <div className="mt-5">
        <h2 className="font-bold">Interview Questions</h2>
        <div>
          {interviewDetail?.questionList?.map((questionObj, index) => (
            <div key={index} className="flex gap-2 items-center mt-2">
              <span className="text-primary font-bold">{index + 1}.</span>
              <p className="text-sm leading-6">{questionObj.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterviewDetailContainer;
