"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion"; // Add this import
import { 
  ChartArea, 
  Clock, 
  User, 
  Menu, 
  X,  
  Check, 
  Shield, 
  Zap, 
  Brain, 
  Headset // Note: it's Headset not HeadSet
} from "lucide-react";
import { supabase } from "@/services/supabaseClient";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0B1E]"> {/* Dark background */}
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#12132D] shadow-[0_0_15px_rgba(32,199,255,0.2)] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                
                <span className="text-xl font-bold text-[#20C7FF]">AiCruiter</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-[#B4BEFF] hover:text-[#20C7FF] transition-colors">Features</Link>
              <Link href="/pricing" className="text-[#B4BEFF] hover:text-[#20C7FF] transition-colors">Pricing</Link>
              <Link href="/How it works?" className="text-[#B4BEFF] hover:text-[#20C7FF] transition-colors">How It works?</Link>
              <Link href="/auth" className="text-[#B4BEFF] hover:text-[#20C7FF] transition-colors">
              <Button className='cursor-pointer'>Dashboard</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#20C7FF]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-[#12132D]">
              {/* ...existing mobile menu code with updated colors... */}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#12132D] to-[#0A0B1E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <motion.h1 
                className="text-5xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Transform Your{" "}
                <motion.span 
                  className="text-[#20C7FF] inline-block"
                  animate={{ 
                    textShadow: [
                      "0 0 7px #20C7FF",
                      "0 0 10px #20C7FF",
                      "0 0 21px #20C7FF",
                      "0 0 42px #20C7FF",
                      "0 0 82px #20C7FF",
                      "0 0 92px #20C7FF",
                      "0 0 102px #20C7FF",
                      "0 0 151px #20C7FF"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Hiring Process
                </motion.span>{" "}
                with AI
              </motion.h1>
              <p className="text-xl text-[#B4BEFF] mb-8">
                Revolutionize recruitment with AI-powered interviews. Save time, reduce bias, and find the best candidates effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/dashboard">
                  <Button className="px-8 py-4 cursor-pointer text-lg w-full sm:w-auto bg-[#20C7FF] text-black hover:bg-[#1EAEE0] shadow-[0_0_15px_rgba(32,199,255,0.3)]">
                    Get Started Free
                  </Button>
                </Link>
               
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/hero-image.png"
                alt="AI Interview Platform"
                width={600}
                height={500}
                className="object-cover rounded-lg shadow-[0_0_25px_rgba(32,199,255,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>

{/* Streamline Your Hiring Process Section */}
<div className=" text-center px-4 sm:px-6 lg:px-8 bg-[#12132D] py-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-white mb-4">
      Streamline Your <span className="text-[#20C7FF]">Hiring Process</span>
    </h2>
    <p className="text-[#B4BEFF] text-lg mb-12 max-w-3xl mx-auto">
      AiCruiter helps you save time and find better candidates with our advanced AI interview technology.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-[#1A1B3D] rounded-xl border border-[#20C7FF]/20 shadow-[0_0_15px_rgba(32,199,255,0.1)] hover:shadow-[0_0_25px_rgba(32,199,255,0.2)] transition-all duration-300"
      >
        <div className="text-[#20C7FF] text-4xl mb-4 flex items-center justify-center">
          <Clock className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">
          Save Time
        </h3>
        <p className="text-[#B4BEFF]">
          Automate initial screening interviews and focus on final candidates.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-[#1A1B3D] rounded-xl border border-[#20C7FF]/20 shadow-[0_0_15px_rgba(32,199,255,0.1)] hover:shadow-[0_0_25px_rgba(32,199,255,0.2)] transition-all duration-300"
      >
        <div className="text-[#20C7FF] text-4xl mb-4 flex items-center justify-center">
          <ChartArea className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">
          Data-Driven Insights
        </h3>
        <p className="text-[#B4BEFF]">
          Get detailed analytics and candidate comparisons based on interview responses.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-[#1A1B3D] rounded-xl border border-[#20C7FF]/20 shadow-[0_0_15px_rgba(32,199,255,0.1)] hover:shadow-[0_0_25px_rgba(32,199,255,0.2)] transition-all duration-300"
      >
        <div className="text-[#20C7FF] text-4xl mb-4 flex items-center justify-center">
          <User className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">
          Reduce Bias
        </h3>
        <p className="text-[#B4BEFF]">
          Standardized interviews help eliminate unconscious bias in the hiring process.
        </p>
      </motion.div>
    </div>
  </motion.div>
</div>

{/* How AiCruiter Works Section */}
<div className=" text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0B1E] to-[#12132D] py-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-white mb-4">
      How <span className="text-[#20C7FF]">AiCruiter</span> Works
    </h2>
    <p className="text-[#B4BEFF] text-lg mb-16 max-w-3xl mx-auto">
      Three simple steps to transform your recruitment process
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto relative">
      {/* Connecting Line */}
      <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#20C7FF] via-[#20C7FF] to-[#20C7FF]" />
      
      <motion.div
        whileHover={{ y: -10 }}
        className="flex flex-col items-center relative"
      >
        <div className="w-20 h-20 bg-[#20C7FF]/10 text-[#20C7FF] rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 border border-[#20C7FF]/30 shadow-[0_0_15px_rgba(32,199,255,0.2)]">
          1
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          Create Interview
        </h3>
        <p className="text-[#B4BEFF] text-center max-w-xs">
          Set up your job requirements and customize interview questions.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -10 }}
        className="flex flex-col items-center relative"
      >
        <div className="w-20 h-20 bg-[#20C7FF]/10 text-[#20C7FF] rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 border border-[#20C7FF]/30 shadow-[0_0_15px_rgba(32,199,255,0.2)]">
          2
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          Share with Candidates
        </h3>
        <p className="text-[#B4BEFF] text-center max-w-xs">
          Send interview links to candidates to complete at their convenience.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -10 }}
        className="flex flex-col items-center relative"
      >
        <div className="w-20 h-20 bg-[#20C7FF]/10 text-[#20C7FF] rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 border border-[#20C7FF]/30 shadow-[0_0_15px_rgba(32,199,255,0.2)]">
          3
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          Review Results
        </h3>
        <p className="text-[#B4BEFF] text-center max-w-xs">
          Get AI-analyzed results, transcripts, and candidate comparisons.
        </p>
      </motion.div>
    </div>
  </motion.div>
</div>

{/* Pricing Section */}
<div className=" text-center px-4 sm:px-6 lg:px-8 bg-[#12132D] py-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-white mb-4">
      Simple, <span className="text-[#20C7FF]">Transparent Pricing</span>
    </h2>
    <p className="text-[#B4BEFF] text-lg mb-12 max-w-3xl mx-auto">
      Choose the perfect plan for your recruitment needs
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {/* Free Plan */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-[#1A1B3D] rounded-xl border border-[#20C7FF]/20 shadow-[0_0_15px_rgba(32,199,255,0.1)] hover:shadow-[0_0_25px_rgba(32,199,255,0.2)] transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
        <div className="text-[#20C7FF] text-4xl font-bold mb-4">Free</div>
        <div className="text-[#B4BEFF] mb-6">Perfect for trying out AiCruiter</div>
        <ul className="text-left text-[#B4BEFF] space-y-3 mb-8">
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> 5 AI Interviews/month
          </li>
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> Basic Analytics
          </li>
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> Email Support
          </li>
        </ul>
        <Button className="w-full bg-[#20C7FF] text-black hover:bg-[#1EAEE0]">
          Get Started
        </Button>
      </motion.div>

      {/* Pro Plan */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-[#1A1B3D] rounded-xl border-2 border-[#20C7FF] shadow-[0_0_30px_rgba(32,199,255,0.2)] hover:shadow-[0_0_40px_rgba(32,199,255,0.3)] transition-all duration-300"
      >
        <div className="text-[#20C7FF] text-sm font-semibold mb-2">MOST POPULAR</div>
        <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
        <div className="text-[#20C7FF] text-4xl font-bold mb-4">$49<span className="text-xl">/month</span></div>
        <div className="text-[#B4BEFF] mb-6">For growing teams</div>
        <ul className="text-left text-[#B4BEFF] space-y-3 mb-8">
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> Unlimited AI Interviews
          </li>
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> Advanced Analytics
          </li>
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> Priority Support
          </li>
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> Custom Questions
          </li>
        </ul>
        <Button className="w-full bg-[#20C7FF] text-black hover:bg-[#1EAEE0]">
          Start Free Trial
        </Button>
      </motion.div>

      {/* Enterprise Plan */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-[#1A1B3D] rounded-xl border border-[#20C7FF]/20 shadow-[0_0_15px_rgba(32,199,255,0.1)] hover:shadow-[0_0_25px_rgba(32,199,255,0.2)] transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
        <div className="text-[#20C7FF] text-4xl font-bold mb-4">Custom</div>
        <div className="text-[#B4BEFF] mb-6">For large organizations</div>
        <ul className="text-left text-[#B4BEFF] space-y-3 mb-8">
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> Everything in Pro
          </li>
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> Custom Integration
          </li>
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> Dedicated Support
          </li>
          <li className="flex items-center">
            <Check className="w-5 h-5 text-[#20C7FF] mr-2" /> SLA Agreement
          </li>
        </ul>
        <Button variant="outline" className="w-full border-[#20C7FF] text-[#20C7FF] hover:bg-[#20C7FF] hover:text-black">
          Contact Sales
        </Button>
      </motion.div>
    </div>
  </motion.div>
</div>


      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        &copy; 2023 AI Voice Recruiter. All rights reserved.
      </footer>
    </div>
  );
}