// src/app/contact/components/BookingSection.tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Calendar, MessageSquare } from "lucide-react"
import ContactForm from "./ContactForm"
import CalendarBooking from "./CalendarBooking" // Import the new component

type TabType = "demo" | "contact"

export default function BookingSection() {
  const [activeTab, setActiveTab] = useState<TabType>("demo")

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      {/* Tab Switcher */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveTab("demo")}
          className={`
            flex-1 relative px-6 py-4 rounded-2xl font-medium text-sm transition-all duration-300
            ${activeTab === "demo" 
              ? "bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white shadow-lg shadow-[#D33E9E]/25" 
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }
          `}
        >
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Book a Demo</span>
          </div>
        </button>

        <button
          onClick={() => setActiveTab("contact")}
          className={`
            flex-1 relative px-6 py-4 rounded-2xl font-medium text-sm transition-all duration-300
            ${activeTab === "contact" 
              ? "bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white shadow-lg shadow-[#D33E9E]/25" 
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }
          `}
        >
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span>Contact Us</span>
          </div>
        </button>
      </div>

      {/* Content Area */}
      <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait">
          {activeTab === "demo" ? (
            <motion.div
              key="demo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CalendarBooking />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.div>
  )
}

