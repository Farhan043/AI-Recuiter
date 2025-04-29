"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';
import { Mail, ArrowLeft, Plus  } from "lucide-react"; // optional: you can use any icon library
import Link from 'next/link';


function InterviewLink({interview_id, formData}) {
   const router = useRouter()
  const url = process.env.NEXT_PUBLIC_HOST_URL+'/'+interview_id;
  const GetInterviewUrl = ()=>{
    return url;
  }
  const onCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    toast('Link copied to clipboard');
  };
  return (
    <div>
      <Image src="/check.png" alt="check" width={100} height={100} className='w-16 h-16 mx-auto'/>
      <h2 className='text-2xl font-bold text-center'>Your AI Interview is Ready!</h2>
      <p className='text-center text-gray-800 '>Share this link with your candidates to start the interview process</p>

      <div className=" w-full mt-5 p-3 bg-white rounded-xl border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Interview Link</h2>
        <span className="text-sm text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full">
          Valid for 30 days
        </span>
      </div>

      <div className="flex items-center gap-2  ">
      <Input defaultValue={GetInterviewUrl()} disabled={true} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
       <Button onClick={()=>onCopyLink()}><Copy/>Copy Link</Button>
      </div>

      <hr className="my-4 border-gray-300" />

      <div className="flex items-center mt-5 justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <span>⏱️{formData?.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>📄 10 Questions</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🗓️ Expires: Nov 20, 2025</span>
        </div>
      </div>
    </div>


    <div className="w-full mt-6 p-3 bg-white rounded-xl shadow-sm border border-gray-300">
      <h3 className="text-xl font-bold text-gray-700 mb-4">Share Via</h3>
      <div className="flex justify-between">
        <button className="flex  items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
          <Mail className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-700">Slack</span>
        </button>

        <button className="flex  items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
          <Mail className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-700">Email</span>
        </button>

        <button className="flex  items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
          <Mail className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-700">Whatsapp</span>
        </button>
      </div>
    </div>

    <div className="flex justify-between items-center max-w-3xl mx-auto mt-8">
      {/* Back to Dashboard Button */}
      <button onClick={() => router.back('/dashboard')} className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-semibold">Back to Dashboard</span>
      </button>

      {/* Create New Interview Button */}
      <Link href={"/dashboard/create-interview" }>
      <button  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        <Plus className="w-4 h-4" />
        <span className="text-sm font-semibold">Create New Interview</span>
      </button>
      </Link>
    </div>
    </div>
  )
}

export default InterviewLink