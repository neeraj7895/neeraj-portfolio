"use client";

import { motion } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import { Mail, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white">

      {/* Cursor Glow */}
      <CursorGlow />
      <div className="mt-8 flex gap-4 flex-wrap">

  {/* View CV */}
  <a
    href="/Neeraj_Sharma_CV.pdf"
    target="_blank"
    className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
  >
    View CV
  </a>

  {/* Download CV */}
  <a
    href="/Neeraj_Sharma_CV.pdf"
    download
    className="px-6 py-3 border border-purple-400 rounded-xl hover:bg-purple-400 hover:text-black transition"
  >
    Download CV
  </a>

</div>


      {/* HERO SECTION */}
      <section className="min-h-screen pt-24 flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>

            {/* Small Logo */}
            <div className="mb-6 text-purple-400 font-semibold tracking-widest">
              NS • Portfolio
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Hi, I’m <span className="text-purple-400">Neeraj Sharma</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 text-2xl text-gray-300"
            >
              FinTech Operations Analyst  
              <br />
              Digital Banking | Automation | Analytics
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-gray-400 max-w-xl"
            >
              Transforming digital payment workflows and operational data 
              into scalable, secure, and technology-driven business solutions.
            </motion.p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <a
                href="mailto:neerajkankauriya@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
              >
                <Mail size={18} />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/neeraj-sharma-27481b190"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 border border-purple-400 rounded-xl hover:bg-purple-400 hover:text-black transition"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-900 to-gray-800 p-8 rounded-3xl shadow-2xl"
          >
            <p className="text-gray-300 space-y-2">
              ✔ 3+ Years in FinTech Operations <br />
              ✔ 35% Automation Efficiency Gain <br />
              ✔ Digital Banking Workflow Optimization <br />
              ✔ Team Leadership & Cross-functional Delivery
            </p>
          </motion.div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-400">
            About Me
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl">
            FinTech Operations and Digital Technology professional with 3+ years of experience 
            in digital banking, transaction monitoring, automation, and operational analytics. 
            I specialize in optimizing payment workflows, strengthening compliance controls, 
            and implementing data-driven operational strategies.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-3xl font-bold text-purple-400">3+</h3>
              <p className="mt-2 text-gray-400">Years FinTech Experience</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-3xl font-bold text-purple-400">35%</h3>
              <p className="mt-2 text-gray-400">Efficiency Improvement</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-3xl font-bold text-purple-400">4</h3>
              <p className="mt-2 text-gray-400">Team Members Led</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-400 mb-12">
            Experience
          </h2>

          <div className="space-y-12">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold">
                Senior Operations Analyst – OneStack Solutions
              </h3>
              <p className="text-gray-400 mt-2">
                Led digital banking workflows, improved automation efficiency by 35%, 
                enhanced transaction monitoring accuracy, and ensured compliance & SLA adherence.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold">
                Associate Data Engineer – Indus Towers
              </h3>
              <p className="text-gray-400 mt-2">
                Developed SQL-based reporting systems, supported infrastructure monitoring, 
                and strengthened data pipeline reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-black text-center text-gray-500 text-sm border-t border-gray-800">
        Designed and created by <span className="text-purple-400">Neeraj Sharma</span>
      </footer>

    </div>
  );
}
