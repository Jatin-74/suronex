"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import {
  Mail,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
} from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
    color: "hover:text-[#1877F2]",
  },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-[#FF0000]" },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    color: "hover:text-[#E4405F]",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
    color: "hover:text-[#0A66C2]",
  },
];

export default function CallToAction() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // === FORM STATE ===
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  // === SPOTLIGHT LOGIC ===
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 relative overflow-hidden bg-transparent"
    >
      <motion.div
        style={{ scale, opacity }}
        className="max-w-4xl mx-auto relative"
      >
        {/* Wrapper for the CARD ONLY. 
            The 'group' class is here so hover effects only trigger 
            when touching the card/blobs, not the social icons.
        */}
        <div className="relative group mb-16">
          
          {/* THE GLOWING BACKGROUND BLOBS (Now scoped to the card group) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3530BA] via-[#D33E9E] to-[#4C32B8] rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:blur-2xl" />

          {/* === MAIN GLASS CARD (The Spotlight Area) === */}
          <div
            className="relative rounded-[2rem] bg-black/60 backdrop-blur-xl border border-white/10 p-12 md:p-20 text-center overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            {/* SPOTLIGHT EFFECT */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: useMotionTemplate`
                        radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(211, 62, 158, 0.15),
                        transparent 80%
                        )
                    `,
              }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />

            <h2 className="relative z-10 text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Ready to secure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
                your infrastructure?
              </span>
            </h2>

            <p className="relative z-10 text-lg text-gray-400 max-w-xl mx-auto mb-10">
              Join the forward-thinking companies that trust Suronex to automate
              governance and eliminate blind spots.
            </p>

            {/* === ACTIONS SECTION === */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* 1. EMAIL FORM */}
              <form
                onSubmit={handleSubmit}
                className="relative group/input w-full max-w-md"
              >
                <div className="relative flex items-center bg-[#0A0A0A] border border-white/20 rounded-full p-1.5 pl-5 shadow-2xl transition-all duration-300 hover:border-white/30 focus-within:border-[#D33E9E]/50 focus-within:shadow-[0_0_20px_rgba(211,62,158,0.3)]">
                  <Mail className="text-gray-500 w-5 h-5 mr-3 group-focus-within/input:text-[#D33E9E] transition-colors shrink-0" />

                  <input
                    type="email"
                    placeholder="Enter work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "success" || status === "loading"}
                    className="bg-transparent border-none outline-none text-white placeholder:text-gray-600 w-full text-base py-2 min-w-0"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "success" || status === "loading"}
                    className={`
                                h-11 px-6 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 shrink-0 ml-2
                                ${
                                  status === "success"
                                    ? "bg-green-500/20 text-green-400 cursor-default"
                                    : "bg-white text-black hover:bg-gradient-to-r hover:from-[#D33E9E] hover:to-[#3530BA] hover:text-white hover:scale-105 shadow-lg"
                                }
                            `}
                  >
                    {status === "loading" ? (
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2 size={18} />
                        <span>Joined</span>
                      </>
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="flex items-center gap-4 w-full justify-center">
                <div className="h-px bg-white/10 w-12" />
                <span className="text-gray-500 text-xs uppercase tracking-widest">
                  OR
                </span>
                <div className="h-px bg-white/10 w-12" />
              </div>

              {/* 2. BOOK DEMO BUTTON */}
              <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn">
                <Calendar className="w-4 h-4 text-gray-400 group-hover/btn:text-[#D33E9E] transition-colors" />
                <span>Book a Live Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* === SOCIAL FOLLOW SECTION (Outside the hover group) === */}
        <div className="relative z-10 text-center">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-8">
            Follow us on
          </p>
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={`
                            group/icon relative p-4 rounded-full bg-white/5 border border-white/10 
                            backdrop-blur-md transition-all duration-300 
                            hover:scale-110 hover:border-white/20 hover:bg-white/10
                            ${social.color}
                         `}
              >
                <social.icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-gray-400 transition-colors duration-300 group-hover/icon:text-inherit"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}