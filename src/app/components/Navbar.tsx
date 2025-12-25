"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 1. LEFT COLUMN: LOGO */}
        <div className="flex-1 flex justify-start">
            <div className="relative w-40 h-12 flex items-center hover:opacity-80 transition-opacity cursor-pointer">
                {/* UPDATED: Points to .png and removed mix-blend-screen */}
                <Image 
                    src="/logo.png" 
                    alt="Suronex Logo" 
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>
        </div>

        {/* 2. CENTER COLUMN: LINKS */}
        <div className="hidden md:flex items-center space-x-8">
          {["Products", "Company", "Resources"].map((item) => (
            <div key={item} className="relative group cursor-pointer">
                <Link
                href={`#${item.toLowerCase()}`}
                className="flex items-center gap-1 text-sm font-bold text-gray-300 hover:text-white transition-colors py-2"
                >
                    {item}
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#D33E9E] transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}

          <div className="relative group cursor-pointer">
            <Link
                href="#suron-ai"
                className="flex items-center gap-1 text-sm font-bold text-gray-300 hover:text-white transition-colors py-2"
            >
                Suron AI
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#D33E9E] transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>

        {/* 3. RIGHT COLUMN: BUTTONS */}
        <div className="flex-1 flex justify-end items-center gap-4 hidden md:flex">
          <button className="group relative px-6 py-2 rounded-full overflow-hidden transition-all duration-300">
             <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
             <span className="relative text-sm font-semibold text-white group-hover:text-[#D33E9E] transition-colors duration-300">
                Sign In
             </span>
          </button>
          
          <button className="px-8 py-3 rounded-full text-white text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(211,62,158,0.4)] hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-[#3530BA] via-[#4C32B8] to-[#D33E9E]">
             Book a Demo
          </button>
        </div>

        <div className="md:hidden text-white cursor-pointer">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}