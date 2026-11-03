import React from "react";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl bg-[#111113] border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-orange-500/10 flex flex-col">

      {/* 1. Browser Mockup Top-Bar */}
      <div className="bg-[#18181b] px-4 py-2.5 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        </div>

        <span className="text-[11px] text-gray-500 font-mono truncate max-w-[160px]">
          {project.title.toLowerCase().replace(/\s+/g, "-")}.app
        </span>
      </div>

      {/* 2. Project Screenshot */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Bottom Dark Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-60 pointer-events-none"></div>
      </div>

      {/* 3. Project Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Project Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((skill, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-orange-500/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 4. Action Buttons */}
        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">

          {/* Live Demo Button (Ab ye project.liveLink se aayega) */}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-medium hover:opacity-90 transition shadow-md shadow-orange-500/10"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* GitHub Button */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 hover:border-white/40 transition"
          >
            <SiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>

        </div>

      </div>

    </div>
  );
}