// src/app/contact/page.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ContactHero from "./components/ContactHero"
import BookingSection from "./components/BookingSection"
import Navbar from "../components/Navbar";
import { Footer } from "../components/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
     <Navbar /> 
      {/* Background Layers */}
<div className="fixed inset-0 bg-black -z-10" />
      
      {/* Shield Watermark */}
      <div className="fixed inset-0 -z-[5] pointer-events-none flex items-center justify-center opacity-10">
        <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
          <Image
            src="/shield-bg.png"
            alt="Suronex Shield Background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 -z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      {/* Ambient Glows */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-[#D33E9E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-[#3530BA]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 font-medium">
                Get in Touch
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Let's Strengthen Your{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
                Cloud Security Together
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Whether you're a growing startup or a global enterprise, Suronex helps you simplify compliance, 
              strengthen cloud security, and stay ahead of risk — without slowing innovation.
            </p>
          </motion.div>

          {/* Split Layout: Hero Left + Booking Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ContactHero />
            <BookingSection />
          </div>

        </div>
      </div>
    <Footer />
    </main>
  )
}

