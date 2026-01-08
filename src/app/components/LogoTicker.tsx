"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

const complianceStandardsRow1 = [
  "ISO 27001:2022", "SOC 2 Type II", "GDPR", "HIPAA",
  "PCI-DSS v4.0", "NIST CSF", "FedRAMP Moderate", "CIS Benchmarks",
  "NIST 800-53 Rev 5", "Mitre Attack", "CCPA", "FISMA",
  "AWS Well-Architected", "RBI Cyber Security", "APRA CPS 234", "SEBI CSCRF"
];

const complianceStandardsRow2 = [
  "ISO 22301", "PCI-DSS v3.2.1", "GLBA", "FERPA",
  "SOX", "COBIT", "FedRAMP Low", "NIST 800-171",
  "ISO 9001", "IRDAI Guidelines", "MAS TRM", "CISA Cyber Essentials",
  "NIS 2", "Korea ISMS-P", "GxP FDA 21 CFR Part 11", "ENS RD 2022"
];

export default function ComplianceCoverage() {
  return (
    <section className="py-32 overflow-hidden bg-black/20 border-y border-white/5 backdrop-blur-sm relative">

      {/* Background Glow for Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3530BA] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-full">

        {/* === HEADER SECTION === */}
        <div className="text-center mb-20 px-4 relative z-10">

            {/* Main Title */}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
                Comprehensive <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
                    Compliance Coverage.
                </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4"
            >
                Navigate the complex world of compliance with automated support for over 40+ essential security frameworks.
            </motion.p>
        </div>


        {/* === SCROLLING TICKER === */}
        <div className="relative flex flex-col gap-12">

            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            {/* ROW 1: Right to Left */}
            <div className="flex overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 80,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-24 pr-24"
                >
                    {[...complianceStandardsRow1, ...complianceStandardsRow1, ...complianceStandardsRow1, ...complianceStandardsRow1].map((standard, index) => (
                        <h3
                            key={index}
                            className="text-3xl md:text-5xl font-light tracking-tight text-gray-600 transition-all duration-500 cursor-default whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#D33E9E] hover:to-[#3530BA] hover:scale-105"
                        >
                            {standard}
                        </h3>
                    ))}
                </motion.div>
            </div>

            {/* ROW 2: Left to Right */}
            <div className="flex overflow-hidden">
                <motion.div
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        duration: 80,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-24 pr-24"
                >
                     {[...complianceStandardsRow2, ...complianceStandardsRow2, ...complianceStandardsRow2, ...complianceStandardsRow2].map((standard, index) => (
                        <h3
                            key={index}
                            className="text-3xl md:text-5xl font-light tracking-tight text-gray-600 transition-all duration-500 cursor-default whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#D33E9E] hover:to-[#3530BA] hover:scale-105"
                        >
                            {standard}
                        </h3>
                    ))}
                </motion.div>
            </div>

        </div>

        {/* === VIEW ALL BUTTON === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-20"
        >
          <Link href="/frameworks">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white font-semibold text-lg shadow-lg shadow-purple-500/20 transition-all duration-300"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3530BA] to-[#D33E9E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Button content */}
              <span className="relative flex items-center gap-3">
                View All Frameworks
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.span>
              </span>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{ skewX: -20 }}
              />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

