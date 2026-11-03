import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiVite } from "react-icons/si";

const skillsList = [
  { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
  { name: "React.js", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38BDF8]" },
  { name: "Redux Toolkit", icon: SiRedux, color: "text-[#764ABC]" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "text-[#F05032]" },
  { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
];

const Skills=()=> {
  return (
    <section id="skills" className="py-16 px-6 md:px-16 bg-[#07090e] text-white border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <p className="text-orange-500 text-sm font-semibold tracking-wide">
          My Skills
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-10">
          Technologies I Work With
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 sm:gap-8 items-center justify-items-center pt-2">
          {skillsList.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center gap-3 cursor-pointer w-full"
              >
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-orange-500/40 group-hover:bg-white/[0.06] transition-all duration-300">
                  <IconComponent
                    className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export default Skills;