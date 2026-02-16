"use client";

import { motion } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import { Mail, Linkedin, Github, Download, Code2, Zap, TrendingUp, BookOpen, ArrowRight, ExternalLink, Brain, Cpu } from "lucide-react";
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

      {/* AI/ML Themed Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Neural Network Background */}
        <svg className="absolute inset-0 w-full h-full opacity-10" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Neural connections */}
          {[...Array(8)].map((_, i) => (
            <line
              key={`line-${i}`}
              x1={Math.random() * 1920}
              y1={Math.random() * 1080}
              x2={Math.random() * 1920}
              y2={Math.random() * 1080}
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="1"
              filter="url(#glow)"
            />
          ))}
          
          {/* Neural nodes */}
          {[...Array(12)].map((_, i) => (
            <circle
              key={`node-${i}`}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r="2"
              fill="rgba(6, 182, 212, 0.4)"
              filter="url(#glow)"
            />
          ))}
        </svg>

        {/* Animated gradient orbs - AI Blue */}
        <motion.div
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -80, 80, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 80, 0],
            y: [0, 80, -80, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
        />
        
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 23, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
        />

        {/* Data flow particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm"
            style={{
              top: `${15 + i * 8}%`,
              left: `${5 + i * 9}%`,
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.6)',
            }}
          />
        ))}

        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, 0.5) 25%, rgba(6, 182, 212, 0.5) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.5) 75%, rgba(6, 182, 212, 0.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.5) 25%, rgba(6, 182, 212, 0.5) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.5) 75%, rgba(6, 182, 212, 0.5) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-32 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center gap-2">
                <Brain size={16} className="text-cyan-400" />
                AI/ML & Data Operations
              </span>
            </motion.div>

            {/* Large Professional Name - Single Line */}
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Neeraj Sharma
                </span>
              </h1>
              
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
                  Senior Operations Analyst
                </h2>
                <p className="text-lg text-gray-400">FinTech | Digital Banking | Data Analytics & ML Operations</p>
              </div>
            </div>

            {/* Professional Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              3+ years driving operational excellence in FinTech. Specialized in transaction monitoring, process automation, and building scalable Power BI dashboards using data-driven ML approaches. Led teams to deliver 30-35% efficiency gains through intelligent automation and predictive analytics.
            </motion.p>

            {/* Achievement Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { label: '3+', value: 'Years Experience', icon: <Cpu size={16} /> },
                { label: '30-35%', value: 'Efficiency Gain', icon: <TrendingUp size={16} /> },
                { label: '4', value: 'Team Members', icon: <Code2 size={16} /> },
                { label: 'FinTech', value: 'Specialist', icon: <Brain size={16} /> },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 1)' }}
                  className="group p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all cursor-default"
                >
                  <div className="flex items-center justify-center mb-2 text-cyan-400 group-hover:text-blue-400 transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-xl font-black text-cyan-400 group-hover:text-blue-400 transition-colors">{item.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              {/* Primary Button - Neon Glow */}
              <motion.a
                href="mailto:neerajkankauriya@gmail.com"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl" />
                <span className="relative flex items-center gap-2">
                  <Mail size={18} />
                  Get In Touch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              {/* Secondary Button - Gradient Border */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              >
                <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-cyan-500 to-blue-500">
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
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-xl font-semibold text-white backdrop-blur-md border border-white/20 hover:border-cyan-400/40 hover:bg-white/10 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </span>
              </motion.a>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-4xl mx-auto pt-8"
            >
              {['Power BI', 'SQL', 'Python', 'Analytics', 'ETL', 'Azure', 'Tableau', 'ML'].map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="px-3 py-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 hover:border-cyan-500/60 text-xs font-semibold text-cyan-300 text-center transition-all"
                >
                  {tech}
                </motion.div>
              ))}
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
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed max-w-3xl mb-12"
          >
            FinTech Operations and Digital Banking specialist with 3+ years of hands-on experience in transaction monitoring, escalation handling, and operational management. I excel at identifying automation opportunities, building scalable Power BI dashboards, and implementing ML-based predictive analytics for operational excellence. Led cross-functional teams to deliver measurable results and optimize workflows through data-driven decision-making.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code2, label: 'Experience', value: '3+ Years', description: 'FinTech Operations' },
              { icon: Zap, label: 'Efficiency', value: '30-35%', description: 'Improvement Delivered' },
              { icon: Brain, label: 'ML Focus', value: 'Predictive', description: 'Analytics & Automation' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-cyan-500/60 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all"
              >
                <stat.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-blue-400 transition-colors" />
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-300 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: 'Senior Operations Analyst (Assistant Manager)',
                company: 'OneStack Solutions Pvt. Ltd.',
                period: 'Oct 2023 - Present',
                description: 'FinTech – Digital Banking',
                highlights: [
                  'Managed 4-member team focused on process optimization and automation',
                  'Reduced 30-35% manual workload through intelligent automation and ML pipelines',
                  'Created advanced Power BI dashboards for HR, Payroll & real-time KPI tracking',
                  'Implemented predictive analytics for transaction monitoring and risk assessment',
                  'Coordinated with product and engineering teams for ML model integration',
                ],
              },
              {
                title: 'Associate Data Engineer',
                company: 'Indus Towers Pvt. Ltd.',
                period: 'Apr 2022 - Mar 2023',
                description: 'Data Engineering | Infrastructure',
                highlights: [
                  'Developed SQL, Power BI, and Advanced Excel skills for data analysis',
                  'Built data pipelines and ETL processes for operational reporting',
                  'Supported system monitoring and deployment with data insights',
                  'Built reports using Power BI and Tableau for predictive analytics',
                  'Created data models for ML-ready analytics platforms',
                ],
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-8 rounded-2xl border border-blue-500/20 hover:border-cyan-500/60 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 hover:from-blue-500/10 hover:to-cyan-500/10 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">{job.title}</h3>
                      <p className="text-cyan-400 font-semibold mt-1">{job.company}</p>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold">{job.period}</span>
                  </div>

                  <p className="text-gray-400 mb-4">{job.description}</p>

                  <ul className="space-y-2">
                    {job.highlights.map((highlight, j) => (
                      <li key={j} className="text-gray-300 flex gap-3">
                        <span className="text-cyan-400 font-bold">▹</span>
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
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'HR Analytics Dashboard (ML-Enhanced)',
                description: 'Built interactive Power BI dashboard with predictive models for HR analytics, attrition forecasting, and KPI tracking',
                tech: ['Power BI', 'SQL', 'Python', 'ML Models'],
                impact: '40% faster reporting',
              },
              {
                title: 'Transaction Monitoring System',
                description: 'Enhanced transaction flow monitoring with ML-based anomaly detection and settlement issue tracking',
                tech: ['SQL Server', 'Power BI', 'ETL', 'ML'],
                impact: '35% efficiency gain',
              },
              {
                title: 'Operational MIS Platform',
                description: 'End-to-end BI solution with predictive analytics for operations management and real-time KPI monitoring',
                tech: ['Power BI', 'SQL', 'DAX', 'Python'],
                impact: 'Enterprise adoption',
              },
              {
                title: 'Data Quality & ML Framework',
                description: 'Implemented governance, data quality checks, and ML pipelines for compliance and predictive insights',
                tech: ['SQL', 'Python', 'Tableau', 'ML'],
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
                className="group relative p-8 rounded-2xl border border-blue-500/20 hover:border-cyan-500/60 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 hover:from-blue-500/10 hover:to-cyan-500/10 transition-all overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white flex-1">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-blue-500/20">
                    <p className="text-cyan-400 font-semibold text-sm">{project.impact}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Stack
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: '📊 BI & Analytics', skills: ['Power BI', 'Tableau', 'Oracle BI', 'Data Viz'] },
              { title: '⚡ Data & ETL', skills: ['SQL Server', 'MySQL', 'ETL', 'Data Warehouse'] },
              { title: '🚀 Tools & Platforms', skills: ['Python', 'Azure DevOps', 'JIRA', 'BMC Remedy'] },
              { title: '🧠 ML & AI', skills: ['Predictive ML', 'Data Science', 'Anomaly Detection', 'DAX'] },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-cyan-500/60 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all"
              >
                <h3 className="font-bold text-white mb-4 text-lg">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <span className="text-cyan-400">◆</span> {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </motion.div>

          <div className="space-y-6">
            {[
              {
                degree: 'MCA - Computer Science',
                school: 'Chandigarh University',
                year: 'Completed 2026',
                status: '✅ Completed',
                icon: '🎓'
              },
              {
                degree: 'BCA - Computer Science',
                school: 'Poornima University, Jaipur',
                year: '2021',
                status: '✅ Completed',
                icon: '📚'
              },
              {
                degree: '12th (PCM)',
                school: 'S.A.B Inter College, Agra',
                year: '2018',
                status: '✅ Completed',
                icon: '✏️'
              }
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="group border-l-4 border-cyan-500/50 hover:border-cyan-500 pl-8 py-4 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-cyan-500/5 transition-all relative rounded-r-lg"
              >
                <div className="absolute -left-3 top-4 w-5 h-5 bg-cyan-500 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">{edu.icon} {edu.degree}</h3>
                    <p className="text-cyan-400 font-semibold text-sm mt-1">{edu.school}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 font-semibold">{edu.year}</span>
                    <span className="text-xs text-green-400">{edu.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            Open to FinTech, Digital Banking, ML Operations, and Data-driven roles. Let's build something amazing!
          </motion.p>

          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { icon: Mail, label: 'Email', href: 'mailto:neerajkankauriya@gmail.com', color: 'from-cyan-500 to-blue-500' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/neeraj-sharma-27481b190', color: 'from-blue-500 to-cyan-500' },
              { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'from-gray-500 to-blue-600' },
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
      <footer className="relative border-t border-blue-500/20 py-8 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Neeraj Sharma. Built with Next.js, React, Framer Motion & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}