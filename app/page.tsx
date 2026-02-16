"use client";

import { motion } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import { Mail, Linkedin, Github, Download, Code2, Zap, TrendingUp, BookOpen, ArrowRight, ExternalLink, Brain, Cpu, Workflow } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

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

      {/* Professional Animated Background */}
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

        {/* Grid background */}
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
      <section className="relative min-h-screen pt-20 md:pt-32 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block max-w-full"
            >
              <span className="px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-xs md:text-sm font-semibold text-gray-300 break-words">
                Portfolio
              </span>
            </motion.div>

            {/* Professional Name */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight md:leading-none break-words">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Neeraj Sharma
                </span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-xl md:text-3xl text-cyan-400 font-bold break-words">
                  Senior Operations Analyst
                </h2>
                <p className="text-sm md:text-lg text-gray-400">FinTech | Digital Banking | Automation & AI/ML Operations</p>
              </div>
            </div>

            {/* Professional Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl"
            >
              3+ years specializing in business automation, operational analytics, and AI/ML implementation. Proven expertise in process optimization, data-driven decision making, and leading teams to deliver measurable business impact.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl"
            >
              {[
                { label: '3+', value: 'Years' },
                { label: '30-35%', value: 'Automation Gain' },
                { label: '4', value: 'Team Lead' },
                { label: 'FinTech', value: 'Expert' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20"
                >
                  <div className="text-lg md:text-xl font-bold text-purple-400">{item.label}</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-4"
            >
              <motion.a
                href="mailto:neerajkankauriya@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                <Mail size={16} className="md:w-[18px] md:h-[18px]" />
                Get In Touch
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-2 md:py-3 border border-purple-400/50 rounded-lg font-semibold text-sm md:text-base hover:bg-purple-400/10 transition-colors"
              >
                View Work
              </motion.a>

              <motion.a
                href="/Neeraj_Sharma_CV.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-2 md:py-3 border border-cyan-400/50 rounded-lg font-semibold text-sm md:text-base hover:bg-cyan-400/10 transition-colors flex items-center gap-2"
              >
                <Download size={16} className="md:w-[18px] md:h-[18px]" />
                CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center mt-8 md:mt-0"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Image container - Responsive size */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all">
                <Image
                  src="/profile.png"
                  alt="Neeraj Sharma"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed max-w-3xl"
          >
            Operations and Business Analytics specialist with deep expertise in process automation, business intelligence, and AI/ML operations. I focus on identifying automation opportunities, building scalable analytics solutions, and implementing intelligent systems that drive operational excellence and business growth.
          </motion.p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Workflow, label: 'Automation Focus', value: '30-35% Reduction', desc: 'Manual Processes' },
              { icon: Brain, label: 'AI/ML Operations', value: 'Predictive', desc: 'Analytics Expert' },
              { icon: TrendingUp, label: 'Business Impact', value: 'High ROI', desc: 'Solutions' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-purple-500/60 transition-all"
              >
                <stat.icon className="w-10 h-10 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">{stat.label}</h3>
                <p className="text-purple-400 font-semibold">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Core Expertise
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Automation',
                items: ['Process Optimization', 'Workflow Automation', 'RPA Implementation', 'Cost Reduction', 'Efficiency Improvement']
              },
              {
                title: 'AI/ML Operations',
                items: ['Predictive Analytics', 'Anomaly Detection', 'ML Pipeline Building', 'Model Implementation', 'Data Intelligence']
              },
              {
                title: 'Business Analytics',
                items: ['Dashboard Development', 'BI Solutions', 'Data-Driven Insights', 'KPI Tracking', 'Reporting & Analysis']
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20"
              >
                <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-purple-400">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: 'Senior Operations Analyst',
                company: 'OneStack Solutions Pvt. Ltd.',
                period: 'Oct 2023 - Present',
                highlights: [
                  'Led business automation initiatives reducing manual work by 30-35%',
                  'Implemented AI/ML-based predictive analytics for operations',
                  'Built Power BI dashboards for business intelligence and KPI tracking',
                  'Managed cross-functional teams for operational excellence',
                  'Designed data-driven solutions for business optimization'
                ],
              },
              {
                title: 'Associate Data Engineer',
                company: 'Indus Towers Pvt. Ltd.',
                period: 'Apr 2022 - Mar 2023',
                highlights: [
                  'Developed SQL-based reporting systems for operational analytics',
                  'Built ETL pipelines for data integration and automation',
                  'Created business intelligence dashboards using Power BI',
                  'Supported infrastructure with data-driven insights',
                  'Established foundation for AI/ML ready data platforms'
                ],
              }
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 hover:border-purple-500/60 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <p className="text-purple-400 font-semibold mt-1">{job.company}</p>
                  </div>
                  <span className="text-xs bg-purple-500/20 px-3 py-1 rounded text-purple-300">{job.period}</span>
                </div>
                <ul className="space-y-2 mt-4">
                  {job.highlights.map((highlight, j) => (
                    <li key={j} className="text-gray-300 text-sm flex gap-2">
                      <span className="text-purple-400">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                title: 'Analytics & BI',
                skills: ['Power BI', 'Tableau', 'Excel/VBA', 'Data Visualization']
              },
              {
                title: 'Databases & ETL',
                skills: ['SQL Server', 'MySQL', 'ETL Pipelines', 'Data Warehouse']
              },
              {
                title: 'Automation & Tools',
                skills: ['Python', 'Azure DevOps', 'JIRA', 'BMC Remedy']
              },
              {
                title: 'AI/ML & Analytics',
                skills: ['Predictive ML', 'Data Science', 'Anomaly Detection', 'DAX']
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20"
              >
                <h3 className="font-bold text-white mb-3 text-sm">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="text-sm text-gray-400">
                      <span className="text-purple-400">◆</span> {skill}
                    </div>
                  ))}
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
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Key Projects
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'HR Analytics & Automation Dashboard',
                description: 'Built Power BI dashboard with automated reporting for payroll, attendance, and KPI tracking. Integrated with data automation for real-time insights.',
                impact: '40% faster reporting',
                tech: ['Power BI', 'SQL', 'Excel/VBA', 'Automation']
              },
              {
                title: 'Operational Automation Framework',
                description: 'Designed and implemented business process automation reducing manual work by 35%. Integrated ML-based monitoring for predictive insights.',
                impact: '35% automation gain',
                tech: ['Python', 'SQL', 'Automation', 'ML Models']
              },
              {
                title: 'Business Intelligence Platform',
                description: 'Developed end-to-end BI solution with real-time KPI dashboards and automated reporting for operations management.',
                impact: 'Enterprise adoption',
                tech: ['Power BI', 'SQL Server', 'DAX', 'Analytics']
              },
              {
                title: 'Data-Driven Operations Optimization',
                description: 'Implemented data quality framework and predictive analytics for operational efficiency and cost optimization.',
                impact: '99.5% accuracy',
                tech: ['SQL', 'Python', 'Analytics', 'ML']
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 hover:border-purple-500/60 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs bg-purple-500/30 text-purple-200 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-cyan-400 text-sm font-semibold">Impact: {project.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="space-y-4">
            {[
              { degree: 'MCA - Computer Science', school: 'Chandigarh University', year: 'Completed 2026' },
              { degree: 'BCA - Computer Science', school: 'Poornima University, Jaipur', year: '2021' },
              { degree: '12th (PCM)', school: 'S.A.B Inter College, Agra', year: '2018' }
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-purple-400 text-sm mt-1">{edu.school}</p>
                  </div>
                  <span className="text-xs bg-purple-500/20 px-3 py-1 rounded text-purple-300">{edu.year}</span>
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
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-gray-400 mb-12"
          >
            Exploring opportunities in Operations Analysis, Product Analytics, Business Automation, and AI/ML Operations roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="mailto:neerajkankauriya@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/neeraj-sharma-27481b190"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-purple-400/50 rounded-lg font-semibold hover:bg-purple-400/10 transition-colors flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyan-400/50 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="/Neeraj_Sharma_CV.pdf"
              download
              className="px-8 py-3 border border-gray-400/50 rounded-lg font-semibold hover:bg-gray-400/10 transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              CV
            </a>
          </motion.div>

          <div className="space-y-2 text-gray-400">
            <p>📧 neerajkankauriya@gmail.com</p>
            <p>📱 +91-7895272496</p>
            <p>📍 Gurugram, Haryana, India</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-purple-500/20 py-8 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Neeraj Sharma. Built with Next.js, React, Framer Motion & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}