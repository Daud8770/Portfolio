import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-16 bg-[#07090e] text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright Text */}
        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Mo Daud Khan. All rights reserved.
        </p>

        {/* Right: Social Media Icons */}
        <div className="flex items-center gap-5 text-gray-400">
          <a
            href="https://github.com/Daud8770"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-orange-500 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a
            href="www.linkedin.com/in/mo-daud-khan-685a89325"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-orange-500 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a
            href="https://x.com/daudkhan8770"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-orange-500 transition-colors"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>

          <a
            href="https://instagram.com/_dawood04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-orange-500 transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}