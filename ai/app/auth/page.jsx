"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { supabase } from '@/services/supabaseClient'; // ✅ FIXED IMPORT


function Login() {

  // const signInWithGoogle =async()=> {
  //   const {error}= await supabase.auth.signInWithOAuth({
  //     provider:'google',
  //   })
  //   if(error) {
  //     console.log("Error:",error.message)
  //   } else {
  //     console.log("Sign in successful")
  //   }
  // }

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/`, // 👈 optional: set a callback path if needed
      },
    });
    if (error) {
      console.error("Login error:", error.message);
    } else {
      console.log("Login flow started"); // Will redirect before this shows
    }
  };
  

  return (
    <div className='flex flex-col items-center justify-center h-screen ' >
      <div className='flex flex-col items-center border rounded-2xl p-8 shadow-lg'>
      <Image src="/logo.png" width={200} height={100} className='w-[80px]' />

      <div className='flex items-center flex-col '>
        <Image src="/login.png" width={600} height={400} className='w-[500px] h-[250px] rounded-2xl' />
        <h2 className='text-2xl font-bold mt-5 text-center '>Welcome to AiCruiter</h2>
        <p className='text-center text-gray-500'>Sign In With Google Authentication</p>
        <Button className='bg-[#4285F4] text-white cursor-pointer w-full mt-4 hover:bg-[#4285F4]' onClick={signInWithGoogle}>Login With Google</Button>
      </div>
      </div>
    </div>
  )
}

export default Login