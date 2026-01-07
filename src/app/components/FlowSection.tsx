"use client"

import { ArrowRightIcon } from "./Icons";
import { TypingEffect } from "./typing-effect";
import {motion} from "framer-motion"  // ✅ Correct
const FlowSection = () => {

    const timelineItems = [
        {
            title: "Connect",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            content: (
                <div className="flex -space-x-4">
                    <img className="inline-block size-12 rounded-full object-cover" src="https://picsum.photos/id/1027/50/50" alt="Avatar 1" />
                    <img className="inline-block size-12 rounded-full object-cover" src="https://picsum.photos/id/1027/50/50" alt="Avatar 2" />
                    <img className="inline-block size-12 rounded-full ring-2 ring-white object-cover" src="https://picsum.photos/id/1027/50/50" alt="Avatar 3" />
                </div>
            ),
        },
        {
            title: "Scan",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            content: (
                <img className="rounded-lg relative top-[15px] h-12 w-auto object-cover" src="https://picsum.photos/id/1027/50/50" alt="Workshop" />
            ),
        },
        {
            title: "Remediate",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            content: (
                <div className="flex -space-x-2">
                    <img className="inline-block size-12 rounded-full object-cover" src="https://picsum.photos/id/1027/50/50" alt="Avatar 4" />
                    <img className="inline-block size-12 rounded-full object-cover" src="https://picsum.photos/id/1027/50/50" alt="Avatar 5" />
                    <img className="inline-block size-12 rounded-full ring-2 ring-white object-cover" src="https://picsum.photos/id/1027/50/50" alt="Avatar 6" />
                </div>
            ),
        },
        {
            title: "Report",
            isLargeTitle: true,
            description: (
                <>
                    <p className="font-semibold text-white mt-2">Reality in work</p>
                    <p className="text-gray-500 text-sm">Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud.</p>
                </>
            ),
            content: (
                <img className="rounded-lg relative top-[30px] h-12 w-auto object-cover" src="https://picsum.photos/id/1027/50/50" alt="Design2Deploy" />
            ),
        }
    ];


    return (
        <section className="bg-transparent text-white py-24 ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-5 max-w-5xl">
                    <div className="col-span-1  text-end pr-3">Suronex 2026</div>
                    <div className="col-span-4 md:col-span-4 text-4xl border-l border-white pl-5"><TypingEffect text="Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters, and automates the work that slows you down." /></div>
                </div>
                <div className="mt-12 md:mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {timelineItems.map((item, index) => (
                            <motion.div initial={index % 2 !== 0 ? { y: -100 } : { y: 100 }} whileInView={{y: 0}} transition={{duration: 0.5, ease:"easeInOut"}} key={index} className={`relative xl:h-auto h-[160px] flex flex-col items-center ${index % 2 !== 0 ? "xl:mt-[84px]" : ""}`}>
                                <div className="xl:text-left text-center">
                                    <h3 className={`${item.isLargeTitle ? 'text-transparent bg-linear-to-l  from-indigo-900 via-purple-900 to-pink-900 bg-clip-text' : ''} tracking-[-4px] text-[36px] xl:text-[46px] font-semibold`}>
                                        {item.title}
                                    </h3>

                                    <div className="text-neutral-400/75 text-sm">
                                        {item.description}
                                    </div>
                                </div>

                                <div className="absolute z-10 min-h-[64px] flex items-center mt-[120px] xl:mt-6 justify-center xl:top-[116px] xl:left-[-8px]">
                                    {item.content}
                                </div>

                                <div
                                    style={{
                                        height: index % 2 == 0 ? "64px" : "24px",
                                        width: "100%",
                                        border: "1px solid white",
                                        borderLeftWidth: "0px",
                                        borderTopWidth: "0px",
                                        top: index % 2 == 0 ? "" : index == 1 ? "32px" : "23px"
                                    }}
                                    className={`relative mr-4 hidden xl:block `}
                                >
                                    <div
                                        className="hidden xl:block absolute left-[100%]"
                                        style={{
                                            height: index % 2 !== 0 ? "64px" : "24px",
                                            width: "24px",
                                            border: "1px solid white",
                                            borderRightWidth: "0px",
                                            borderBottomWidth: "0px",
                                            top: index % 2 == 0 ? "63px" : "23px"
                                        }}
                                    ></div>
                                </div>

                                <div className={`hidden xl:block absolute ${index % 2 == 0 ? 'top-[191px] left-[244px]' : 'top-[183px] left-[243px]'}`}>
                                    <div className="bg-white h-[1px] w-10 rotate-[12deg]"></div>
                                    <div className="absolute z-1 bg-white h-[1px] w-10 rotate-[-12deg]"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 md:mt-36 flex flex-col sm:flex-row justify-center items-center gap-6">
                    <motion.button initial={{scale: 0, opacity: 0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.3, delay:0.1, ease:"easeInOut"}} className="bg-linear-to-r from-indigo-800 items-center via-purple-800 to-pink-800 text-white w-[140px] lg:w-auto p-2 md:px-8 md:py-3 rounded-md font-semibold text-sm md:text-lg hover:opacity-90 transition-opacity w-full sm:w-auto flex justify-center gap-2">
                        Book Demo <ArrowRightIcon className="w-5 h-5" />
                    </motion.button>
                    <div className="flex items-center gap-3">
                        
                        <span className="text-gray-400 text-lg"><TypingEffect text="Slots are available"/></span>
                        <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>


        </section>
    )
}
export default FlowSection;
