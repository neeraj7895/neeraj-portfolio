"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="text-purple-400 font-bold text-xl tracking-wider">
          NS
        </a>

        {/* Links */}
        <div className="flex gap-8 text-sm">

          {["about", "experience", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                active === item
                  ? "text-purple-400"
                  : "text-gray-300"
              }`}
            >
              {item}
            </a>
          ))}

        </div>

      </div>
    </motion.nav>
  );
}
