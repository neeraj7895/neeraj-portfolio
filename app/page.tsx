"use client";

import { motion } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import { Mail, Linkedin, Github, Download, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Cursor Glow */}
      <CursorGlow />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-5" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Data nodes */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-24 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small Logo */}
            <div className="mb-6 text-purple-400 font-semibold tracking-widest text-sm">
              NS • PORTFOLIO
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Neeraj Sharma</span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl text-gray-300 font-light">
              FinTech Operations Analyst
            </h2>

            <p className="mt-2 text-gray-400 text-sm">Digital Banking | Automation | Analytics</p>

            <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
              Transforming digital payment workflows and operational data into scalable, secure, and technology-driven business solutions.
            </p>

            {/* Achievement Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>3+ Years in FinTech Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>35% Automation Efficiency Gain</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Digital Banking Workflow Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Team Leadership & Cross-functional Delivery</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="mailto:neerajkankauriya@gmail.com"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <Mail size={18} />
                Get In Touch
              </a>

              <a
                href="#projects"
                className="px-6 py-3 border border-purple-400/50 rounded-lg font-semibold hover:bg-purple-400/10 transition-colors"
              >
                View My Work
              </a>

              <a
                href="/Neeraj_Sharma_CV.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-cyan-400/50 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Tech Stack Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-800/20 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {['Power BI', 'SQL', 'Python', 'Tableau', 'Excel', 'Analytics', 'Automation', 'Leadership'].map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="flex items-center justify-center bg-black/40 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-pointer p-4"
                  >
                    <span className="font-semibold text-sm text-gray-300 group-hover:text-purple-400">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative py-24 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 max-w-3xl leading-relaxed"
          >
            FinTech Operations and Digital Technology professional with 3+ years of experience in digital banking, transaction monitoring, automation, and operational analytics. I specialize in optimizing payment workflows, strengthening compliance controls, and implementing data-driven operational strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: '3+', label: 'Years FinTech Experience' },
              { number: '35%', label: 'Efficiency Improvement' },
              { number: '4', label: 'Team Members Led' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/60 transition-all"
              >
                <h3 className="text-4xl font-bold text-purple-400">{stat.number}</h3>
                <p className="mt-2 text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-12"
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                title: 'Senior Operations Analyst',
                company: 'OneStack Solutions Pvt. Ltd.',
                period: 'Oct 2023 - Present',
                description: 'Digital Banking | FinTech Operations',
                highlights: [
                  'Managed 4-member team for process optimization and automation',
                  'Reduced 30-35% manual work through automation and SQL optimization',
                  'Built interactive Power BI dashboards for HR, Payroll, and KPI tracking',
                  'Coordinated cross-functional teams (Product, Engineering, Customer Success)'
                ]
              },
              {
                title: 'Associate Data Engineer',
                company: 'Indus Towers Pvt. Ltd.',
                period: 'Apr 2022 - Mar 2023',
                description: 'Data Engineering | Infrastructure Support',
                highlights: [
                  'Developed core skills in SQL, Power BI, and Advanced Excel',
                  'Built data pipelines and ETL processes for operational reporting',
                  'Supported system monitoring and application deployment'
                ]
              }
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group border-l-4 border-purple-500 pl-8 py-4 hover:border-cyan-500 transition-colors relative"
              >
                <div className="absolute -left-3 top-4 w-5 h-5 bg-purple-500 rounded-full group-hover:bg-cyan-500 transition-colors"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <p className="text-purple-400 font-semibold">{job.company}</p>
                  </div>
                  <span className="text-xs bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">{job.period}</span>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{job.description}</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {job.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="relative py-24 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-16"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: '📊 Analytics & Reporting',
                skills: ['Power BI', 'Tableau', 'Advanced Excel', 'Google Data Studio', 'DAX']
              },
              {
                title: '⚡ Databases & ETL',
                skills: ['SQL Server', 'MySQL', 'Data Warehouse', 'ETL Pipelines', 'Data Modeling']
              },
              {
                title: '🚀 Automation & Tools',
                skills: ['Python', 'Azure DevOps', 'JIRA', 'SharePoint', 'BMC Remedy']
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group p-8 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-purple-500/20 rounded-2xl hover:border-purple-500/60 transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs font-medium group-hover:bg-cyan-500/20 group-hover:text-cyan-200 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-16"
          >
            Key Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'HR Analytics Dashboard',
                description: 'Interactive Power BI dashboard for payroll, attendance KPI tracking, and team attrition analysis',
                tech: ['Power BI', 'SQL', 'Excel'],
                impact: '40% faster reporting'
              },
              {
                title: 'Payment Operations Automation',
                description: 'Automated transaction monitoring and settlement workflow optimization for digital banking',
                tech: ['Python', 'SQL', 'ETL'],
                impact: '35% efficiency gain'
              },
              {
                title: 'Operational MIS Platform',
                description: 'End-to-end BI solution for operations management with real-time KPI monitoring',
                tech: ['Power BI Service', 'SQL Server', 'DAX'],
                impact: '50+ users'
              },
              {
                title: 'Data Quality Framework',
                description: 'Implemented governance and data quality checks for compliance and audit readiness',
                tech: ['SQL', 'Python', 'Tableau'],
                impact: '99.5% accuracy'
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group relative p-8 border border-purple-500/20 rounded-2xl hover:border-purple-500/60 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-2 py-1 bg-purple-500/30 text-purple-200 rounded text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-purple-500/20 text-sm text-cyan-400 font-semibold">
                  Impact: {project.impact}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-24 bg-black/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            I'm always interested in collaborating on innovative projects and exploring new opportunities.
          </motion.p>

          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="mailto:neerajkankauriya@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/40 rounded-lg hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              <Mail size={20} />
              <span className="font-semibold">Email</span>
            </a>

            <a
              href="https://linkedin.com/in/neeraj-sharma-27481b190"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 rounded-lg hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Linkedin size={20} />
              <span className="font-semibold">LinkedIn</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-500/20 to-white/20 border border-gray-500/40 rounded-lg hover:border-gray-500 transition-all hover:shadow-lg hover:shadow-gray-500/20"
            >
              <Github size={20} />
              <span className="font-semibold">GitHub</span>
            </a>
          </motion.div>

          <p className="text-gray-400">
            Email: <a href="mailto:neerajkankauriya@gmail.com" className="text-purple-400 hover:text-cyan-400 font-semibold transition-colors">neerajkankauriya@gmail.com</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-purple-500/20 py-8 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© Developed By Neeraj Sharma</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}