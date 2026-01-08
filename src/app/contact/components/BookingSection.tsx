"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Calendar, MessageSquare } from "lucide-react"
import ContactForm from "./ContactForm"
import CalendarBooking from "./CalendarBooking"

type TabType = "demo" | "contact"

export default function BookingSection() {
  const [activeTab, setActiveTab] = useState<TabType>("demo")

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative p-1"
    >
      {/* Tab Switcher */}
      <div className="flex gap-3 mb-8 px-4 pt-4">
        <motion.button
          onClick={() => setActiveTab("demo")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            flex-1 relative px-6 py-4 rounded-2xl font-medium text-sm transition-all duration-300
            ${activeTab === "demo" 
              ? "bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white shadow-[0_0_20px_rgba(211,62,158,0.3)] border border-transparent" 
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:text-white"
            }
          `}
        >
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Book a Demo</span>
          </div>
        </motion.button>

        <motion.button
          onClick={() => setActiveTab("contact")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            flex-1 relative px-6 py-4 rounded-2xl font-medium text-sm transition-all duration-300
            ${activeTab === "contact" 
              ? "bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white shadow-[0_0_20px_rgba(211,62,158,0.3)] border border-transparent" 
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:text-white"
            }
          `}
        >
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span>Contact Us</span>
          </div>
        </motion.button>
      </div>

      {/* Content Area */}
      <div className="relative min-h-[600px] px-4 pb-4">
        <AnimatePresence mode="wait">
          {activeTab === "demo" ? (
            <motion.div
              key="demo"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <CalendarBooking />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
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
