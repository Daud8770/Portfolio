
import React, { useState, useEffect } from "react";
import logo from "../assets/Daud-svg.svg";
import resume from "../assets/Mo_Daud_khan_React_js_devloper.pdf";

const NavBar = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  // click pe section tak scroll
  const handleClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // scroll karne pe bhi active item badle
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-24 xl:px-40 transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-900/90 backdrop-blur-md border-b border-orange-500/30 text-white shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <a href="#home" onClick={(e) => handleClick(e, "home")}>
          <img src={logo} alt="Daud logo" className="h-9 w-auto" />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-2 rounded-full border from-amber-600 to-black px-1 py-1 md:flex">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`rounded-full px-4 py-1.5 text-sm transition-all duration-300 ${
                active === id
                  ? "border bg-linear-to-r from-amber-600 to-black font-medium text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* RESUME BUTTON */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden cursor-pointer items-center gap-2.5 rounded-full border-0 bg-linear-to-r from-amber-600 to-black py-2 pl-5 pr-2 text-sm font-medium text-zinc-50 hover:text-zinc-200 md:flex"
        >
          Resume
          <span className="flex size-7 items-center justify-center rounded-full bg-white">
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path
                d="M.6 4.602h10m-4-4 4 4-4 4"
                stroke="#3f3f47"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex cursor-pointer flex-col gap-1.5 border-0 bg-transparent p-1 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-zinc-800 transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-zinc-800 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-zinc-800 transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-1 border-t border-zinc-200 bg-white p-5 md:hidden">
            {navItems.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`rounded-lg px-4 py-2.5 text-sm ${
                  active === id
                    ? "bg-zinc-100 font-medium text-zinc-800"
                    : "text-zinc-500 hover:bg-zinc-50"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
