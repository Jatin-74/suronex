// src/app/contact/components/ContactHero.tsx
"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Building2, Facebook, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"

// X Icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/suronex", color: "#1877F2", label: "Facebook" },
  { icon: XIcon, href: "https://x.com/suronex", color: "#000000", label: "X" },
  { icon: Youtube, href: "https://youtube.com/@suronex", color: "#FF0000", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/suronex", color: "#0A66C2", label: "LinkedIn" },
]

export default function ContactHero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-10"
    >
      
      {/* Contact Sales */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 border border-white/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#D33E9E]" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Contact Sales
          </h3>
        </div>
        <a 
          href="mailto:contact@suronex.ai"
          className="block text-2xl font-semibold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#D33E9E] hover:to-[#3530BA] transition-all duration-300"
        >
          contact@suronex.ai
        </a>
      </div>

      {/* Registered Office */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="group relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 border border-white/10 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-[#D33E9E]" />
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
                Registered Office
              </h4>
              <p className="text-base font-medium text-white mb-1">
                Suronex Cloudsafe Private Limited
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                New Delhi, India
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Corporate Office */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="group relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3530BA]/20 to-[#D33E9E]/20 border border-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#3530BA]" />
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
                Corporate Office
              </h4>
              <p className="text-base font-medium text-white mb-1">
                Suronex Cloudsafe Private Limited
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Gurugram, Haryana, India
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="pt-4"
      >
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
          Follow Us
        </h4>
        <div className="flex gap-3">
          {socialLinks.map((social, i) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-white/20"
                aria-label={social.label}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${social.color}40` }}
                />
                
                <IconComponent className="relative w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            )
          })}
        </div>
      </motion.div>

    </motion.div>
  )
}

