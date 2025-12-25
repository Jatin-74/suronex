"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]); 

  return (
    <section
      ref={targetRef}
      // UPDATED: Changed 'bg-black' to 'bg-transparent' 👇
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-transparent pt-32 pb-32"
    >
      {/* --- BACKGROUND ORBS (Optional: You can keep or remove these since you have the shield now) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#3530BA]/30 rounded-full blur-[100px] animate-float mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D33E9E]/20 rounded-full blur-[120px] animate-float mix-blend-screen" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div
        style={{ scale, y }}
        className="z-10 relative flex flex-col items-center gap-8 max-w-5xl mx-auto p-6 md:p-12"
      >
        <motion.div style={{ opacity: textOpacity }} className="flex flex-col items-center gap-8">
            
            {/* --- TAGLINE WITH PINK UNDERLINE --- */}
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative overflow-hidden text-white/90 font-bold tracking-[0.3em] uppercase text-sm border border-white/10 px-6 py-3 rounded-full backdrop-blur-md bg-white/5"
            >
                Intelligent. Integrated. Compliant.
                
                <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.0, duration: 1.0, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 h-[3px] bg-[#D33E9E]"
                />
            </motion.h2>

            {/* --- HEADLINE --- */}
            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center text-white leading-[1]"
            >
            Secure your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C32B8] via-[#3530BA] to-[#D33E9E] drop-shadow-[0_0_30px_rgba(76,50,184,0.4)]">
                Cloud Future.
            </span>
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl text-center leading-relaxed"
            >
            The only platform that unifies governance, risk, and compliance 
            across your entire infrastructure.
            </motion.p>
        </motion.div>

        {/* --- BUTTONS --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-8 w-full justify-center items-center"
        >
          {/* Primary Button */}
          <button className="group relative rounded-full p-[2px] overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D33E9E_0%,#3530BA_50%,#D33E9E_100%)]" />
            <div className="relative h-full w-full rounded-full bg-black px-10 py-5">
                <span className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D33E9E] group-hover:to-[#3530BA] transition-all">
                  Get Started
                </span>
            </div>
          </button>
          
          {/* Secondary Button */}
          <button className="px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 hover:-translate-y-1">
            See the Platform
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}