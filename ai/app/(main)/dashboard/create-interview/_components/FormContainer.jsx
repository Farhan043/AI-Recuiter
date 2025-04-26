import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterviewType } from "@/services/Constants";
import { ArrowBigRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function FormContainer({onHandleInputChange, GoToNext}) {

  const [interviewType, setInterviewType] = useState([]);

  useEffect(() => {
    if(interviewType) {
  
    onHandleInputChange("type", interviewType);
    }
  }, [interviewType]);

  const AddInterviewType = (type) => {
     const data = interviewType.includes(type);
     if(!data)
     {
      setInterviewType((prev) => [...prev, type]);
     } else {
      const result = interviewType.filter(item => item !== type);
      setInterviewType(result);
     }
  }
  

  return (
    <div>
      <div className="p-5 bg-gray-200 rounded-lg">
        <h2 className="text-sm font-bold">Job Position</h2>
        <Input
          className="border border-gray-500 mt-2"
          placeholder="e.g full stack developer"
          onChange = {(event) => onHandleInputChange("jobPosition", event.target.value)}
        />

        <div className="mt-5">
          <h2 className="text-sm font-bold">Job Description</h2>
          <Textarea
            placeholder="Enter details job description"
            className="border border-gray-500 mt-2 h-[200px]"
            onChange = {(event) => onHandleInputChange("jobDescription", event.target.value)}
          />
        </div>

        <div className="mt-5">
          <h2 className="text-sm font-bold">Interview Duration</h2>
          <Select onValueChange={(value) => onHandleInputChange("duration", value)}>
            <SelectTrigger className="w-full mt-2 border border-gray-500"> 
              <SelectValue placeholder="Select Duration"  />
            </SelectTrigger>
            <SelectContent >
              <SelectItem value="5 Min">5 Min</SelectItem>
              <SelectItem value="15 Min">15 Min</SelectItem>
              <SelectItem value="30 Min">30 Min</SelectItem>
              <SelectItem value="45 Min">45 Min</SelectItem>
              <SelectItem value="60 Min">60 Min</SelectItem>
            </SelectContent>
          </Select>
        </div>


        
        <div className="mt-5">
          <h2 className="text-sm font-bold">Interview Type</h2>
           <div className="flex flex-wrap gap-1 mt-2 ">
            {InterviewType.map((type, index) => (
              <div key={index} className={`flex items-center mt-2 border border-gray-500 p-2 rounded-md cursor-pointer  hover:bg-gray-200 hover:text-gray-400 transition duration-200 ease-in-out ${interviewType.includes(type.title) && " text-blue-400 bg-blue-100 "}`}
                onClick={()=> AddInterviewType(type.title)}>
                 {type.icon && <type.icon className="w-5 h-5 mr-2" />}
                <label htmlFor={type.title} className="text-sm font-medium cursor-pointer">
                  {type.title}
                </label>
              </div>
            ))}
           </div>
        </div>
      <div className="flex justify-end mt-5 " onClick= {()=> GoToNext()} >
        <Button className='cursor-pointer'>Generate Questions <ArrowBigRight /></Button>
      </div>
    </div>
    </div>

  );
}

export default FormContainer;
