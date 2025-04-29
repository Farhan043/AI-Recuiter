import Image from 'next/image'
import React from 'react'

function InterviewHeader() {
return (
        <nav className='flex justify-between items-center border-b shadow-sm p-5 bg-white'>
            <div className='flex items-center'>
                <Image src={"/logo.png"} alt="logo" width={100} height={100} className='w-[40px]' />
                <span className='ml-2 text-xl font-bold'>AI Voice</span>
            </div>
        </nav>
)
}

export default InterviewHeader