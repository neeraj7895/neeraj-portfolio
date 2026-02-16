"use client";

import { motion } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import { Mail, Linkedin, Github, Download, Code2, Zap, TrendingUp, BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Cursor Glow */}
      <CursorGlow />

      {/* Premium Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />

        {/* Animated grid */}
        <svg className="absolute inset-0 w-full h-full opacity-5" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-cyan-500 rounded-full blur-sm"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-32 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Neeraj Sharma
                </span>
              </h1>

              <h2 className="text-3xl md:text-4xl text-gray-300 font-light mt-4">
                Senior Operations Analyst
              </h2>

              <p className="mt-4 text-lg text-gray-400">FinTech | Digital Banking | Data Analytics</p>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              3+ years driving operational excellence in FinTech. Specialized in transaction monitoring, process automation, and building scalable Power BI dashboards. Led teams to deliver 30-35% efficiency gains through data-driven solutions.
            </p>

            {/* Achievement Pills */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '3+', value: 'Years Experience' },
                { label: '30-35%', value: 'Efficiency Gain' },
                { label: '4', value: 'Team Members' },
                { label: 'FinTech', value: 'Specialist' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 transition-all cursor-default"
                >
                  <div className="text-2xl font-black text-purple-400">{item.label}</div>
                  <div className="text-sm text-gray-400 mt-1">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* Primary Button - Neon Glow */}
              <motion.a
                href="mailto:neerajkankauriya@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              >
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                {/* Main background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl" />
                {/* Text */}
                <span className="relative flex items-center gap-2">
                  <Mail size={18} />
                  Get In Touch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              {/* Secondary Button - Gradient Border */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              >
                <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-purple-500 to-cyan-500">
                  <div className="absolute inset-[2px] bg-black rounded-[10px] group-hover:bg-white/5 transition-all" />
                </div>
                <span className="relative flex items-center gap-2">
                  <Code2 size={18} />
                  View My Work
                </span>
              </motion.a>

              {/* Tertiary Button - Glass Effect */}
              <motion.a
                href="/Neeraj_Sharma_CV.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-xl font-semibold text-white backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⚡', name: 'Power BI', level: 'Expert' },
                { icon: '🔧', name: 'SQL Server', level: 'Expert' },
                { icon: '📊', name: 'Analytics', level: 'Advanced' },
                { icon: '🚀', name: 'Automation', level: 'Advanced' },
                { icon: '💾', name: 'ETL', level: 'Intermediate' },
                { icon: '🎯', name: 'Azure DevOps', level: 'Intermediate' },
                { icon: '📈', name: 'Tableau', level: 'Proficient' },
                { icon: '🐍', name: 'Python', level: 'Proficient' },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 transition-all cursor-pointer"
                >
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="font-semibold text-white text-sm">{tech.name}</div>
                  <div className="text-xs text-purple-300 mt-1">{tech.level}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed max-w-3xl mb-12"
          >
            FinTech Operations and Digital Banking specialist with 3+ years of hands-on experience in transaction monitoring, escalation handling, and operational management. I excel at identifying automation opportunities, building scalable Power BI dashboards, and leading cross-functional teams to deliver measurable results. Passionate about data-driven decision-making and process optimization.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code2, label: 'Experience', value: '3+ Years', description: 'FinTech Operations' },
              { icon: Zap, label: 'Efficiency', value: '30-35%', description: 'Improvement Delivered' },
              { icon: TrendingUp, label: 'Leadership', value: '4 Members', description: 'Team Size' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-purple-500/60 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all"
              >
                <stat.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:text-cyan-400 transition-colors" />
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-300 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: 'Senior Operations Analyst (Assistant Manager)',
                company: 'OneStack Solutions Pvt. Ltd.',
                period: 'Oct 2023 - Present',
                description: 'FinTech – Digital Banking',
                highlights: [
                  'Managed 4-member team focused on process optimization',
                  'Reduced 30-35% manual workload through automation',
                  'Created Power BI dashboards for HR, Payroll & KPI',
                  'Coordinated with product and engineering teams',
                ],
              },
              {
                title: 'Associate Data Engineer',
                company: 'Indus Towers Pvt. Ltd.',
                period: 'Apr 2022 - Mar 2023',
                description: 'Data Engineering | Infrastructure',
                highlights: [
                  'Developed SQL, Power BI, and Advanced Excel skills',
                  'Built data pipelines and ETL processes',
                  'Supported system monitoring and deployment',
                  'Built reports using Power BI and Tableau',
                ],
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 hover:from-purple-500/10 hover:to-cyan-500/10 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">{job.title}</h3>
                      <p className="text-purple-400 font-semibold mt-1">{job.company}</p>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold">{job.period}</span>
                  </div>

                  <p className="text-gray-400 mb-4">{job.description}</p>

                  <ul className="space-y-2">
                    {job.highlights.map((highlight, j) => (
                      <li key={j} className="text-gray-300 flex gap-3">
                        <span className="text-purple-400 font-bold">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'HR Analytics Dashboard',
                description: 'Built interactive Power BI dashboard for HR analytics and KPI tracking',
                tech: ['Power BI', 'SQL', 'Excel'],
                impact: '40% faster reporting',
              },
              {
                title: 'Transaction Monitoring System',
                description: 'Enhanced transaction flow monitoring and settlement issue tracking',
                tech: ['SQL Server', 'Power BI', 'ETL'],
                impact: '35% efficiency gain',
              },
              {
                title: 'Operational MIS Platform',
                description: 'End-to-end BI solution for operations with real-time KPI monitoring',
                tech: ['Power BI', 'SQL Server', 'DAX'],
                impact: 'Enterprise adoption',
              },
              {
                title: 'Data Quality Framework',
                description: 'Implemented governance and data quality checks for compliance',
                tech: ['SQL', 'Python', 'Tableau'],
                impact: '99.5% accuracy',
              },
            ].map((project, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 hover:from-purple-500/10 hover:to-cyan-500/10 transition-all overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white flex-1">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-purple-500/20">
                    <p className="text-cyan-400 font-semibold text-sm">{project.impact}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Analytics & BI', skills: ['Power BI', 'Tableau', 'Oracle BI', 'Excel'] },
              { title: 'Databases', skills: ['SQL Server', 'MySQL', 'ETL', 'Data Warehouse'] },
              { title: 'Tools', skills: ['BMC Remedy', 'JIRA', 'Azure DevOps', 'SharePoint'] },
              { title: 'Programming', skills: ['Python', 'SQL', 'DAX', 'Power Query'] },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-purple-500/60 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all"
              >
                <h3 className="font-bold text-white mb-4 text-lg">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <span className="text-purple-400">◆</span> {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            Open to FinTech, Digital Banking, and Data-driven Operations roles. Let's build something amazing together!
          </motion.p>

          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { icon: Mail, label: 'Email', href: 'mailto:neerajkankauriya@gmail.com', color: 'from-purple-500 to-cyan-500' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/neeraj-sharma-27481b190', color: 'from-blue-500 to-cyan-500' },
              { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'from-gray-500 to-gray-600' },
            ].map((btn, i) => (
              <motion.a
                key={i}
                href={btn.href}
                target={btn.label !== 'Email' ? '_blank' : undefined}
                rel={btn.label !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden flex items-center gap-3`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${btn.color} rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-md`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${btn.color} rounded-xl`} />
                <btn.icon size={20} className="relative z-10" />
                <span className="relative z-10">{btn.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <p className="text-gray-400">📧 neerajkankauriya@gmail.com</p>
            <p className="text-gray-400">📱 +91-7895272496</p>
            <p className="text-gray-400">📍 Gurugram, Haryana, India</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-purple-500/20 py-8 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Neeraj Sharma. Built with Next.js, React, Framer Motion & Tailwind CSS.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}