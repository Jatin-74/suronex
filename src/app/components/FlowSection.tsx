"use client"

import { ArrowRightIcon } from "./Icons";
import { TypingEffect } from "./typing-effect";
import {motion} from "framer-motion"
import Link from "next/link";

const FlowSection = () => {

    const timelineItems = [
        {
            title: "Connect",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            image: "/placeholder-connect.gif",
        },
        {
            title: "Scan",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            image: "/placeholder-scan.gif",
        },
        {
            title: "Remediate",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            image: "/placeholder-remediate.gif",
        },
        {
            title: "Report",
            isLargeTitle: true,
            subtitle: "Reality in work",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud.",
            image: "/placeholder-report.gif",
        }
    ];


    return (
        <section className="bg-transparent text-white py-24 ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-5 max-w-5xl">
                    <div className="col-span-1 text-end pr-3">Suronex 2026</div>
                    <div className="col-span-4 md:col-span-4 text-4xl border-l border-white pl-5">
                        <TypingEffect text="Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters, and automates the work that slows you down." />
                    </div>
                </div>

                <div className="mt-12 md:mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {timelineItems.map((item, index) => (
                            <motion.div 
                                initial={index % 2 !== 0 ? { y: -100 } : { y: 100 }} 
                                whileInView={{y: 0}} 
                                transition={{duration: 0.5, ease:"easeInOut"}} 
                                key={index} 
                                className={`${index % 2 !== 0 ? "lg:mt-24" : ""}`}
                            >
                                {/* Card Container */}
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="group relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                                >
                                    {/* Content Section */}
                                    <div className="p-6 pb-4">
                                        <h3 className={`${item.isLargeTitle ? 'text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text' : 'text-white'} tracking-tight text-3xl lg:text-4xl font-bold mb-3`}>
                                            {item.title}
                                        </h3>

                                        {item.subtitle && (
                                            <p className="font-semibold text-white text-sm mb-2">{item.subtitle}</p>
                                        )}

                                        <p className="text-neutral-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <img 
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                                                src={item.image} 
                                                alt={`${item.title} workflow visualization`} 
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                                        </motion.div>

                                        {/* Hover Indicator */}
                                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                                                <ArrowRightIcon className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Breathing Border Effect */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 blur-xl animate-pulse" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 md:mt-36 flex justify-center">
                    <Link href="/contact">
                        <motion.button 
                            initial={{scale: 0, opacity: 0}} 
                            whileInView={{scale:1, opacity:1}} 
                            transition={{duration:0.3, delay:0.1, ease:"easeInOut"}}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                        >
                            Book Demo <ArrowRightIcon className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default FlowSection;

