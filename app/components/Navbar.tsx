"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-black/50 backdrop-blur-lg border-b border-gray-800 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-purple-400 font-bold text-xl">
          NS
        </h1>

        <div className="flex gap-8 text-gray-300 text-sm">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>

      </div>
    </motion.nav>
  );
}
