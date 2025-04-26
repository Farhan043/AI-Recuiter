"use client";
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import FormContainer from './_components/FormContainer';
import QuestionList from './_components/QuestionList';
import { toast } from 'sonner';

function CreateInterview() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState();

// const OnGoToNext = () => {
//   if(!formData?.jobPosition || !formData?.jobDescription || !formData?.duration || !formData?.type) 
//   {
//     toast("Please fill all the fields!")
//     return;
//   }
//     setStep(step+1);
  
//   }

  const OnGoToNext = () => {
    if (
      !formData?.jobPosition?.trim() ||
      !formData?.jobDescription?.trim() ||
      !formData?.duration?.trim() ||
      !formData?.type ||
      formData?.type.length === 0
    ) {
      toast("Please fill all the fields!");
      return;
    }
    setStep(step + 1);
  };
  


  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  console.log(formData, "formData")

  return (
    <div className='mt-10   px-10 md:px-24 lg:px-44 xl:px-56'>
      <div className='flex gap-1 items-center'>
        <ArrowLeft onClick={() => router.back()} className='cursor-pointer w-8 h-8  '/>
        <h2 className='text-2xl font-bold'>Create New Interview</h2>
      </div>
      <Progress value={step*33.33} className='my-5' />
      {step==1 ? <FormContainer onHandleInputChange={onHandleInputChange}
      GoToNext={() => OnGoToNext()}/>
      : step==2 ? <QuestionList formData={formData}/> : null}
    </div>
  )
}


export default CreateInterview