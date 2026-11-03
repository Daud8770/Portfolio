import React from "react";
import { ArrowRight } from "lucide-react";
import whoImg from "../assets/who.jpeg";
const  About=()=> {
  return (
    <section id="about" className="py-20 px-3 md:px-16 bg-[#07090e] text-white border-b border-white/10">
      <div className="max-w-[1420px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center ">
        
        {/* Left Image Container */}
        <div className="md:col-span-5 relative group">
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-white/10 bg-[#11131a] shadow-xl">
            <img
            src= {whoImg} // Apni photo lagana
              alt="Daud"
              className="w-full h-full object-fill object-cover object-top brightness-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/80" />

            <div className="absolute right-6 bottom-8 text-right select-none">
              <p className="font-serif italic text-2xl sm:text-3xl text-gray-200 leading-tight drop-shadow-md">
                Keep <br /> Building
              </p>
              <span className="text-gray-400 tracking-widest text-lg">...</span>
            </div>
          </div>
        </div>

        {/* Right Content Container */}
        <div className="md:col-span-7 space-y-4">
          <p className="text-orange-500 text-sm font-semibold tracking-wide">
            About Me
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Who I Am
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            I'm Daud, a passionate Frontend Developer . I specialize
            in building responsive, user-friendly web applications using React,
            Tailwind CSS, Redux Toolkit, and modern JavaScript. Currently, I'm
            focused on crafting clean UI experiences and real-world projects.
            Seeking Frontend Devloper and React.js Devloper and full time .
          </p>

          <div className="pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-orange-500/60 text-orange-400 text-sm font-medium hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
export default About;