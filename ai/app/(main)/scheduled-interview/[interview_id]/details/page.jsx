"use client"
import { useUser } from '@/app/provider';
import { supabase } from '@/services/supabaseClient';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import InterviewDetailContainer from './_components/interviewDetailContainer';
import CandidateList from './_components/CandidateList';

function InterviewDetail() {
  const { interview_id } = useParams();
  const {user} = useUser();
  const [interviewDetail, setInterviewDetail] = useState();

  useEffect(() => {
    user && GetInterviewList();
  }, [user])
  

   const GetInterviewList = async () => {
          const result = await supabase.from('interviews')
          .select(`jobPosition,jobDescription, type, questionList, duration, interview_id, created_at, userEmail, interview-feedback(userEmail, userName, feedback, created_at)`)
          .eq('userEmail', user?.email)
          .eq('interview_id', interview_id)

          
          setInterviewDetail(result?.data[0]);
          console.log(result);
      }
  
  return (
    <div>
      <h2 className='font-bold text-2xl'>Interview Details</h2>
      <InterviewDetailContainer interviewDetail={interviewDetail}/>
      <CandidateList CandidateList = {interviewDetail?.['interview-feedback']}/>
    </div>
  )
}

export default InterviewDetail