import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const skills = ["HTML", "CSS", "JavaScript", "Tailwind", "React", "Git & GitHub"];

const Hero = () => {
    const roleRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(roleRef.current, {
            strings: [
                "Frontend Developer",
                "React Developer",
                "Web Developer",
                "UI Developer",
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
        });

        return () => typed.destroy();
    }, []);

    return (
        <div
            id="home"
            className="relative flex min-h-screen items-center justify-start 
bg-[url('/Hero-bg.png')] bg-cover bg-center bg-no-repeat 
px-4 pt-20 text-white
sm:px-6 sm:pt-24
md:px-12
lg:px-24
xl:px-40">
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* LEFT SIDE */}
            <div className="relative z-10 max-w-2xl text-left">
                {/* fresher ke liye useful badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-4 py-1 text-sm text-green-300">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
                    Open to Internships & Entry-level Roles
                </span>

                <h3 className="mt-6 text-lg text-gray-300 md:text-xl">Hello, I'm</h3>
                <h1 className="mt-1 text-5xl font-bold md:text-6xl">Daud</h1>

                <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                    I'm a <span ref={roleRef} className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"></span>
                </h2>

                <p className="mt-6 text-gray-300">
                    Frontend Developer skilled in HTML, CSS, JavaScript, Tailwind CSS, and React.
                    I focus on building responsive, user-friendly interfaces and I'm looking for
                    an opportunity to grow and contribute to real-world projects.
                </p>
                {/* TECH STACK */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="https://github.com/Daud8770?tab=repositories" className="rounded-full border border-white/60 bg-linear-to-r from-amber-600 to-black px-8 py-3 font-semibold text-white transition-all duration-300 hover:from-amber-400 hover:to-orange-700"
                    >
                        View Projects
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="rounded-full border border-white/60 px-8 py-3 font-semibold text-white transition-all duration-300 hover:border-transparent hover:bg-linear-to-r hover:from-amber-600 hover:to-black"
                    >
                        Download Resume
                    </a>
                    <a
                        href="https://github.com/Daud8770"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/60 px-8 py-3 font-semibold text-white transition-all duration-300 hover:border-transparent hover:bg-linear-to-r hover:from-amber-600 hover:to-black"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;