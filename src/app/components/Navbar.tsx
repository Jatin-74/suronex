"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";

interface DropdownItem {
  text: string,
  link: string
}

interface Navlink {
  base: string,
  href: string,
  dropdown?: DropdownItem[]
}
const navlinks: Navlink[] = [{
  base: "Products",
  href: "/",
  dropdown: [
    {
      text: "Cloud Security",
      link: "/products/cloud-security"
    },
    {
      text: "Inventory Management",
      link: "/products/inventory-management"
    },
    {
      text: "Governance, Risk & Compliance",
      link: "/products/governance-risk-compliance"
    }
  ]
},
{
  base: "Company",
  href: "/",
  dropdown: [
    {
      text: "About Us", link: "/about-us"
    }, {
      text: "Contact Us", link: "/contact-us"
    }
  ]
},
{
  base: "Resources",
  href: "/",
  dropdown: [
    { text: "FAQs", link: "/faq" },
    { text: "Whitepaper", link: "/whitepaper" }
  ]
},
{
  base: "Suron AI",
  href: "/suron-ai"
}]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    < nav
      className={`fixed top-0 w-full z-[999] transition-all duration-300 
        ${scrolled ? "bg-white border-b border-white/10 text-black shadow-lg py-4" : "bg-transparent py-4"
        } `}
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
          {navlinks.map((item) => (
            <div key={item.base} className="relative group cursor-pointer">
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-sm font-bold transition-colors py-2 ${
                  scrolled ? "text-black" : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.base}
                {item.dropdown && (
                  <ChevronDown
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </Link>

              {/* UNDERLINE */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#D33E9E] transition-all duration-300 group-hover:w-full" />

              {/* DROPDOWN */}
              {item.dropdown && (
                <div
                  className="
                    absolute left-0 top-full mt-3 w-56
                    rounded-xl border bg-white shadow-xl
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                  "
                >
                  {item.dropdown.map((drop) => (
                    <Link
                      key={drop.text}
                      href={drop.link}
                      className="
                        block px-5 py-3 rounded-xl text-sm text-gray-700
                        hover:bg-gray-100 hover:text-black
                      "
                    >
                      {drop.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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
