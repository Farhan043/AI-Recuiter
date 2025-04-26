"use client";
import { Button } from '@/components/ui/button';
import { Camera, Video } from 'lucide-react';
import React, { useState } from 'react'

function LatestInterviewsList() {
    const [interviewList, setInterviewList] = useState([]);
  return (
    <div className='my-5'>
        <h2 className='text-2xl font-bold'>Previously Created Interviews</h2>
        {interviewList?.length==0 &&
        <div className='p-5 flex flex-col gap-2 items-center bg-blue-100 mt-3 rounded-lg'>
           <Video className='text-primary bg-blue-50 rounded-lg p-3 w-12 h-12' />
           <h2>You don't have any interview created!</h2>
           <Button>Create New Interview</Button>
        </div>}
    </div>
  )
}

export default LatestInterviewsList