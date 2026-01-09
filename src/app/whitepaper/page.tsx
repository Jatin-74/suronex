"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Clock, ArrowRight, FileText, Sparkles } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

// --- MOCK DATA BASED ON SURONEX CONTENT ---
const whitepapers = [
  {
    id: "1",
    slug: "multi-cloud-security-redefined",
    title: "Multi-Cloud Security Redefined",
    excerpt: "Transform compliance from complexity to confidence. Discover how AI-driven intelligence is eliminating blind spots and automating compliance across AWS, Azure, and GCP.",
    category: "Cloud Security",
    author: "Suronex Research",
    publishedDate: "2025-12-19",
    readingTime: 12,
    featuredImage: "/dashboard.png", // Using your existing asset
    isFeatured: true,
  },
  {
    id: "2",
    slug: "ai-governance-policy",
    title: "The Future of AI Governance",
    excerpt: "Navigating the complex landscape of AI regulation. A comprehensive guide to securing LLMs and ensuring data privacy in the age of generative AI.",
    category: "Compliance",
    author: "Suronex Team",
    publishedDate: "2025-11-15",
    readingTime: 8,
    featuredImage: null, // Will show fallback
    isFeatured: false,
  },
  {
    id: "3",
    slug: "inventory-management-guide",
    title: "Mastering Cloud Inventory",
    excerpt: "Why visibility is the foundation of security. Learn how to discover, classify, and monitor every resource across your multi-cloud infrastructure.",
    category: "Inventory",
    author: "Suronex Tech",
    publishedDate: "2025-10-26",
    readingTime: 6,
    featuredImage: null,
    isFeatured: false,
  }
];

const categories = ["All", "Cloud Security", "Compliance", "Inventory", "AI Safety"];

export default function WhitepaperListing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredPapers = whitepapers.filter(paper => {
    const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          paper.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPaper = whitepapers.find(p => p.isFeatured);
  const regularPapers = filteredPapers.filter(p => p.id !== featuredPaper?.id);

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-[#D33E9E]/30 relative font-sans">
      
      {/* 1. FIXED BACKGROUND LAYER (Matches Contact Page) */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Breathing Shield */}
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
          <motion.div
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-4/5 h-4/5 rounded-full bg-gradient-radial from-[#D33E9E]/60 via-[#3530BA]/30 to-transparent blur-[70px] -z-10"
          />
          <motion.div 
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full drop-shadow-[0_0_15px_rgba(211,62,158,0.9)]"
          >
            <Image src="/shield-bg.png" alt="Shield" fill className="object-contain" priority />
          </motion.div>
        </div>
        {/* Ambient Lights */}
        <div className="absolute inset-0 overflow-hidden font-sans z-[-2]">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3530BA]/10 rounded-full blur-[150px]" 
          />
          <motion.div 
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D33E9E]/10 rounded-full blur-[150px]" 
          />
        </div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-32 md:pt-48 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* HERO HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-lg shadow-purple-500/10">
                <FileText className="w-4 h-4 text-[#D33E9E]" />
                <span className="text-xs font-semibold text-gray-200 tracking-widest uppercase">Research & Insights</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] via-[#9F5FD6] to-[#3530BA]">Whitepaper</span> <br />
                Library
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Deep dives into cloud security, compliance strategies, and the future of AI governance.
              </p>
            </motion.div>

            {/* SEARCH & FILTER BAR (Glassmorphic) */}
            <div className="sticky top-24 z-40 mb-16">
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-4 flex flex-col md:flex-row gap-4 justify-between items-center shadow-2xl">
                
                {/* Search */}
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search whitepapers..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D33E9E]/50 transition-all"
                  />
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                        selectedCategory === cat 
                          ? "bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white shadow-lg" 
                          : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FEATURED POST */}
            {featuredPaper && !searchQuery && selectedCategory === "All" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <Link href={`/whitepaper/${featuredPaper.slug}`} className="group block relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#D33E9E]/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto bg-white/5">
                      {featuredPaper.featuredImage ? (
                        <Image src={featuredPaper.featuredImage} alt={featuredPaper.title} fill className="object-cover object-left group-hover:scale-105 transition-transform duration-700" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center"><Sparkles className="w-20 h-20 text-white/10" /></div>
                      )}
                      <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#D33E9E] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                        Featured
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="text-[#3530BA] text-sm font-bold uppercase tracking-widest mb-4">{featuredPaper.category}</div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D33E9E] group-hover:to-[#3530BA] transition-all">
                        {featuredPaper.title}
                      </h2>
                      <p className="text-gray-400 text-lg mb-8 line-clamp-3">{featuredPaper.excerpt}</p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                        <span className="text-white font-medium">{featuredPaper.author}</span>
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredPaper.publishedDate}</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPaper.readingTime} min read</span>
                      </div>

                      <div className="flex items-center gap-2 text-[#D33E9E] font-semibold group-hover:gap-4 transition-all">
                        Read Whitepaper <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* PAPER GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPapers.map((paper, idx) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link href={`/whitepaper/${paper.slug}`} className="group block h-full rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#3530BA]/30 overflow-hidden hover:bg-white/[0.04] transition-all duration-300 flex flex-col">
                    <div className="relative aspect-[16/9] bg-white/5 overflow-hidden">
                      {paper.featuredImage ? (
                        <Image src={paper.featuredImage} alt={paper.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
                          <FileText className="w-16 h-16 text-white/5" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-gray-300">
                        {paper.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D33E9E] transition-colors">{paper.title}</h3>
                      <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">{paper.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
                        <span>{paper.publishedDate}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {paper.readingTime} min</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredPapers.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-white mb-2">No whitepapers found</h3>
                <p className="text-gray-400">Try adjusting your search or filters.</p>
              </div>
            )}

          </div>
        </main>
        
        {/* FOOTER */}
        <div className="relative w-full border-t border-white/10 bg-[#030014]/60 backdrop-blur-xl [&_footer]:!bg-transparent [&_section]:!bg-transparent [&_div]:!bg-transparent">
          <Footer />
        </div>
      </div>
    </div>
  );
}