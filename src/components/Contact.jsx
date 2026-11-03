import React, { useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-[#07090e] text-white border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-4">
          <p className="text-orange-500 text-sm font-semibold tracking-wide">
            Get In Touch
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's Work Together
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md pt-1">
            Have a project in mind or just want to say hi? Feel free to reach
            out. I'm always open to new opportunities.
          </p>

          {/* Email & Location */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
              </div>
              <a
                href="mailto:daudkhan@example.com"
                className="hover:text-orange-400 transition-colors"
              >
                daudkhan8770@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
              </div>
              <span>Bhopal, India</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="bg-[#0d1017] border border-white/10 rounded-xl p-6 sm:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#131722] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#131722] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#131722] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-medium hover:opacity-95 transition shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}