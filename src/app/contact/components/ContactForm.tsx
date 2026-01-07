// src/app/contact/components/ContactForm.tsx
"use client"

import { motion } from "framer-motion"
import { useState, FormEvent } from "react"
import { Send, CheckCircle2, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setStatus("success")
    setTimeout(() => {
      setStatus("idle")
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 rounded-3xl blur-2xl" />
      
      <div className="relative p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6">Send A Message</h3>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status !== "idle"}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all duration-300 disabled:opacity-50"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status !== "idle"}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all duration-300 disabled:opacity-50"
              placeholder="john@company.com"
            />
          </div>

          {/* Mobile */}
          <div className="group">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-400 mb-2">
              Mobile *
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              disabled={status !== "idle"}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all duration-300 disabled:opacity-50"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Subject */}
          <div className="group">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={status !== "idle"}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all duration-300 disabled:opacity-50"
              placeholder="How can we help?"
            />
          </div>

          {/* Message */}
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Type your message / question
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              disabled={status !== "idle"}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all duration-300 resize-none disabled:opacity-50"
              placeholder="Tell us more about your needs..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status !== "idle"}
            whileHover={status === "idle" ? { scale: 1.02 } : {}}
            whileTap={status === "idle" ? { scale: 0.98 } : {}}
            className={`
              w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2
              ${status === "success"
                ? "bg-green-500/20 border border-green-500/50 text-green-400"
                : "bg-gradient-to-r from-[#D33E9E] to-[#3530BA] hover:shadow-lg hover:shadow-[#D33E9E]/25"
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {status === "loading" && (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>Message Sent!</span>
              </>
            )}
            {status === "idle" && (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  )
}

