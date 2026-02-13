"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen pt-24 flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
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
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-purple-400"
          >
            About Me
          </motion.h2>

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

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-400 mb-12">
            Key Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-lg font-semibold">
                Digital Payment Workflow Optimization
              </h3>
              <p className="mt-4 text-gray-400 text-sm">
                Improved visibility of transaction flows and reduced operational delays 
                through structured automation and reporting.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-lg font-semibold">
                Escalation Analytics System
              </h3>
              <p className="mt-4 text-gray-400 text-sm">
                Built structured data insights for ticket resolution, 
                improving SLA adherence and response time.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-lg font-semibold">
                Operational KPI Automation
              </h3>
              <p className="mt-4 text-gray-400 text-sm">
                Automated recurring MIS dashboards enabling faster 
                executive-level decision making.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-purple-400">
            Let’s Connect
          </h2>

          <p className="mt-6 text-gray-400">
            Open to FinTech, Digital Banking, and Data-driven Operations roles.
          </p>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="mailto:your-email@gmail.com"
              className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            >
              Email Me
            </a>

            <a
              href="https://linkedin.com"
              className="px-6 py-3 border border-purple-400 rounded-xl hover:bg-purple-400 hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
