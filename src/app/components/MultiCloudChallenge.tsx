"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "./Icons";
import {motion} from "framer-motion"  // ✅ Correct

export default function MultiCloudChallenge() {

    return (
        <section className="bg-transparent text-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
                    The Multi-Cloud <br />
                    Compliance{" "}
                    <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                        Challenge
                    </span>
                </h2>

                <p className="mt-4 max-w-xl text-gray-400 text-sm sm:text-md">
                    Organizations struggle with fragmented security across multiple cloud
                    providers. We turn chaos into confidence.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <motion.div initial={{x: typeof window !== "undefined" && window.innerWidth >1024 ? -100 : 0, opacity:0}} whileInView={{x: 0, opacity:1}} transition={{duration: 0.5, ease: "easeInOut"}}   className="relative md:col-span-1 overflow-hidden rounded-xl">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_30%,#201f3d_65%,#420935_80%)] blur-2xl"
                        />

                        <div className="relative z-10 flex flex-col h-full justify-between p-5">
                            <div className="flex items-start justify-between gap-4">
                                <p className="text-sm text-gray-300 max-w-xs">
                                    Single pane of glass for all cloud <br /> environments with consistent policies
                                </p>

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-800 via-purple-800 to-pink-800">
                                    <ArrowRightIcon />
                                </div>
                            </div>

                            <h3 className="text-4xl font-semibold mt-16">
                                Unified Security <br /> Dashboard
                            </h3>
                        </div>
                    </motion.div>
                    <motion.div initial={{y: -150, opacity:0}} whileInView={{y: 0, opacity:1}} transition={{duration: 0.7, ease:"easeInOut"}} className="md:col-span-2  rounded-xl bg-linear-to-br from-violet-900 via-purple-900 to-pink-800 p-0.5">
                        <div className="relative z-10 flex flex-col h-full justify-between p-5 rounded-xl bg-[#1b1c1d]">
                        <div className="flex items-start justify-between gap-4">
                            <p className="text-lg text-neutral-300 max-w-2xl">
                                Generate SOC, ISO 27001, and HIPAA reports in minutes. Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters, and automates the work that slows you down.
                            </p>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-800 via-purple-800 to-pink-800">
                                <ArrowRightIcon />
                            </div>
                        </div>
                        <h3 className="text-4xl font-semibold mt-12">
                            Automated Audit <br /> Reports
                        </h3>
                    </div>
                    </motion.div>
                    <motion.div initial={{y: 150, opacity:0}} whileInView={{y: 0, opacity:1}} transition={{duration: 0.7, ease:"easeInOut"}}  className="md:col-span-2 rounded-xl  bg-linear-to-br from-violet-900 via-purple-900 to-pink-800 p-0.5">
                        <div className="relative z-10 flex flex-col h-full justify-between p-5 bg-[#1b1c1d] rounded-xl">
                        <div className="flex items-start justify-between gap-4">
                            <p className="text-lg text-neutral-300 max-w-xl">
                                Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.
                            </p>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-800 via-purple-800 to-pink-800">
                                <ArrowRightIcon />
                            </div>
                        </div>
                        <h3 className="text-4xl font-semibold mt-12">
                            Automated Audit <br /> Reports
                        </h3>
                        </div>
                    </motion.div>
                    <motion.div initial={{x: typeof window !== "undefined" && window.innerWidth >1024 ? 100 : 0, opacity:0}} whileInView={{x: 0, opacity:1}} transition={{duration: 0.5, ease: "easeInOut"}} className="relative md:col-span-1 overflow-hidden rounded-xl">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_30%,#201f3d_65%,#420935_80%)] blur-2xl"
                        />

                        <div className="relative z-10 flex flex-col h-full justify-between p-5">
                            <div className="flex items-start justify-between gap-2">
                                <p className="text-md text-gray-300">
                                    Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.
                                </p>

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-800 via-purple-800 to-pink-800">
                                    <ArrowRightIcon />
                                </div>
                            </div>

                            <h3 className="text-4xl font-semibold mt-16">
                               AI-Powered Insights
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
