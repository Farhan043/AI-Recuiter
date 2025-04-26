"use client";
import { Phone, Video } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function CreateOptions() {
  const router = useRouter()
  return (
    <div className='grid grid-cols-2 gap-5'>
        <div onClick={() => router.push('/dashboard/create-interview')} className='bg-gray-900 border border-gray-300 rounded-lg p-5 text-white cursor-pointer '>
          <Video className='text-blue-500 bg-blue-100 rounded-lg p-3 h-12 w-12'  />
          <h2 className='text-lg font-bold'>Create New Interview</h2>
            <p className='text-gray-400'>Create AI interviews and Schedule then with candidates</p>
        </div>

        <div className='bg-gray-900 border border-gray-300 rounded-lg p-5 text-white '>
          <Phone className='text-blue-500 bg-blue-100 rounded-lg p-3 h-12 w-12'  />
          <h2 className='text-lg font-bold'>Create Phone Screening Call</h2>
            <p className='text-gray-400'>Schedule phone screening call with candidates</p>
        </div>
    </div>
  )
}

export default CreateOptions