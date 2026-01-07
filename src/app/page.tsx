import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Compliance from "./components/Compliance";
import CostOfInaction from "./components/CostOfInaction";
import RiskMap from "./components/RiskMap";
import Solution from "./components/Solution";
import LogoTicker from "./components/LogoTicker";
import CallToAction from "./components/CallToAction";
import TerminalHero from "./components/TerminalHero";
import Image from "next/image";
import MultiCloudChallenge from "./components/MultiCloudChallenge";
import FlowSection from "./components/FlowSection";
import {BuiltForWorkV2} from "./components/BuiltForWorkV2";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#D33E9E] selection:text-white flex flex-col relative overflow-hidden">

      {/* --- LAYER 1: BLACK BASE --- */}
      <div className="fixed inset-0 bg-black z-[-10]" />

      {/* --- LAYER 2: THE SHIELD IMAGE --- */}
      <div className="fixed inset-0 z-[-5] pointer-events-none flex items-center justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
            <Image
                src="/shield-bg.png"
                alt="Suronex Shield Background"
                fill
                className="object-contain object-center opacity-15"
                priority
            />
          </div>
      </div>

      {/* --- LAYER 3: THE GRID --- */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-black/20 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_70%)]" />
      </div>

      {/* --- LAYER 4: CONTENT --- */}
      <div className="relative z-10 w-full">
         <Navbar />
         <Hero />
         <LogoTicker />
         {/* <Compliance /> */}

         {/* Don't just detect risks section */}
         {/* <div className="text-center mt-20 mb-[-60px] relative z-20">
           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
             Don't just detect risks. <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
               Eliminate them.
             </span>
           </h2>
           <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
             Experience the NEX-Shield™ Active Defense engine in action below.
           </p>
         </div> */}

         {/* <TerminalHero /> */}
         <BuiltForWorkV2 />
         <MultiCloudChallenge />
         <FlowSection />

         {/* --- ATTACK PATH VISUALIZATION --- */}
         <div className="bg-black/40 backdrop-blur-sm border-y border-white/5 relative z-20">
           {/* <RiskMap /> */}
         </div>

         {/* <CostOfInaction /> */}
         <Solution />
         <CallToAction />

         <div className="flex items-center justify-center py-20 border-t border-white/5 bg-black/20 backdrop-blur-md">
            <p className="text-gray-600 text-sm font-medium tracking-widest uppercase">
              © 2025 Suronex AI. All rights reserved.
            </p>
         </div>
      </div>
    </main>
  );
}

