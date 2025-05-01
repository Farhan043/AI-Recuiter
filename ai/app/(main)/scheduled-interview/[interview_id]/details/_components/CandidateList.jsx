import { Button } from "@/components/ui/button";
import moment from "moment";
import React from "react";

function CandidateList({ CandidateList }) {
  return (
    <div className="">
      <h2 className="font-bold my-5">Candidates ({CandidateList?.length})</h2>
      {Array.isArray(CandidateList) &&
        CandidateList.map((candidate, index) => (
          <div
            className="p-5 flex  gap-2 items-center justify-between bg-blue-100 mt-3 rounded-lg"
            key={index}
          >
            <div className="flex gap-3 items-center">
              <h2 className="bg-primary p-3 px-4.5 rounded-full text-white ">
                {candidate?.userName[0]}
              </h2>
              <div>
                <h2 className="font-bold">{candidate?.userName}</h2>
                <h2 className="text-sm text-gray-500">
                  Completed On:{" "}
                  {moment(candidate?.created_at).format("MMM DD, yyyy")}
                </h2>
              </div>
            </div>
            <div>
                
              <Button variant="outline" className="text-primary">
                View Report
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CandidateList;
