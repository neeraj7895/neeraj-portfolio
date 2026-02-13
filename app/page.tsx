"use client";

import { motion } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import { Mail, Linkedin, Github, Download, ExternalLink, Code2, Zap, TrendingUp, BookOpen } from "lucide-react";
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
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Neeraj</span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl text-gray-300 font-light">
              Senior Operations Analyst
            </h2>

            <p className="mt-2 text-gray-400 text-sm">FinTech | Digital Banking | Data Analytics</p>

            <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
              3+ years driving operational excellence in FinTech. Specialized in transaction monitoring, process automation, and building scalable Power BI dashboards. Led teams to deliver 30-35% efficiency gains through data-driven solutions.
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
                  <span>30-35% Manual Workload Reduction via Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Led 4-Member Team on Process Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Expert in Power BI, SQL Server & Data Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Transaction Monitoring & SLA Compliance Specialist</span>
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
              <p className="text-xs text-purple-300 font-semibold mb-4">TECH STACK</p>
              <div className="grid grid-cols-2 gap-4">
                {['Power BI', 'SQL Server', 'Python', 'Tableau', 'Azure DevOps', 'ETL', 'BMC Remedy', 'JIRA'].map((tech, i) => (
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
            FinTech Operations and Digital Banking specialist with 3+ years of hands-on experience in transaction monitoring, escalation handling, and operational management. I excel at identifying automation opportunities, building scalable Power BI dashboards, and leading cross-functional teams to deliver measurable results. Passionate about data-driven decision-making and process optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: '3+', label: 'Years FinTech Operations' },
              { number: '30-35%', label: 'Efficiency Improvement' },
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
                title: 'Senior Operations Analyst (Assistant Manager)',
                company: 'OneStack Solutions Pvt. Ltd.',
                period: 'Oct 2023 - Present',
                description: 'FinTech – Digital Banking',
                highlights: [
                  'Managed 4-member team focused on process optimization and automation',
                  'Monitored transaction flows, settlement issues, and system-level escalations',
                  'Reduced 30-35% manual workload through automation and workflow optimization',
                  'Created Power BI dashboards for HR Payroll, Attendance KPI, and Team Attrition',
                  'Coordinated with product, engineering, and customer success teams for faster resolution',
                  'Handled high-priority escalations ensuring minimal downtime and SLA adherence',
                  'Designed data models and Power BI reports with admin-level role management',
                  'Supported UAT for operational changes and new feature rollouts'
                ],
                tech: ['Power BI', 'SQL Server', 'ETL', 'BMC Remedy', 'JIRA', 'Azure DevOps']
              },
              {
                title: 'Associate Data Engineer',
                company: 'Indus Towers Pvt. Ltd.',
                period: 'Apr 2022 - Mar 2023',
                description: 'Data Engineering | Infrastructure Support',
                highlights: [
                  'Developed core skills in SQL, Power BI, Oracle BI, and Advanced Excel',
                  'Built data pipelines and ETL processes for operational reporting',
                  'Supported system monitoring, application deployment, and issue resolution',
                  'Handled client queries using BMC Remedy and ESH Help Desk tools',
                  'Worked with cross-functional teams to troubleshoot system stability',
                  'Built reports using Power BI Desktop and Tableau',
                  'Created data models for analytics and business intelligence'
                ],
                tech: ['Power BI', 'SQL Server', 'Tableau', 'ETL', 'Excel', 'SharePoint']
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
                <ul className="space-y-2 text-gray-300 text-sm mb-4">
                  {job.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t, j) => (
                    <span key={j} className="px-2 py-1 bg-purple-500/20 text-purple-200 rounded text-xs">
                      {t}
                    </span>
                  ))}
                </div>
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: '📊',
                title: 'Analytics & BI',
                skills: ['Power BI', 'Tableau', 'Oracle BI', 'Excel', 'Dashboards', 'KPI Tracking']
              },
              {
                icon: '⚡',
                title: 'Databases & ETL',
                skills: ['SQL Server', 'MySQL', 'Data Warehouse', 'ETL Pipelines', 'Data Modeling', 'Query Optimization']
              },
              {
                icon: '🚀',
                title: 'Business Tools',
                skills: ['BMC Remedy', 'JIRA', 'SharePoint', 'Confluence', 'Azure DevOps', 'UAT Tools']
              },
              {
                icon: '💻',
                title: 'Programming',
                skills: ['Python', 'SQL', 'DAX', 'Power Query', 'VBA', 'Data Manipulation']
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group p-6 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-purple-500/20 rounded-2xl hover:border-purple-500/60 transition-all"
              >
                <h3 className="text-lg font-bold mb-4">{category.icon} {category.title}</h3>
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

      {/* CORE COMPETENCIES SECTION */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-16"
          >
            Core Competencies
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              'Daily Operations Management',
              'Transaction Workflow Monitoring',
              'Escalation Handling & Resolution',
              'Payment Operations & Reconciliation',
              'Settlement Monitoring',
              'SLA Tracking & Compliance',
              'Operational Risk Controls',
              'Process Optimization & SOP Development',
              'Quality Checks & Data Governance',
              'UAT Coordination',
              'Cross-functional Team Leadership',
              'Automation Implementation'
            ].map((competency, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg hover:border-purple-500/60 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{competency}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative py-24 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-16"
          >
            Key Projects & Achievements
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'HR Analytics Dashboard',
                description: 'Built interactive Power BI dashboard for HR Payroll, Attendance KPI tracking, and Team Attrition analysis. Enabled self-service reporting for management.',
                tech: ['Power BI', 'SQL Server', 'Excel', 'DAX'],
                impact: 'Faster HR reporting & insights',
                metrics: 'Real-time tracking'
              },
              {
                title: 'Transaction Monitoring System',
                description: 'Implemented enhanced transaction flow monitoring and settlement issue tracking. Improved escalation handling accuracy and reduced operational delays.',
                tech: ['SQL Server', 'Power BI', 'ETL', 'BMC Remedy'],
                impact: '30-35% efficiency gain',
                metrics: 'Reduced manual work significantly'
              },
              {
                title: 'Operational MIS Platform',
                description: 'Designed end-to-end BI solution for operations management with real-time KPI monitoring, SLA tracking, and compliance reporting.',
                tech: ['Power BI Service', 'SQL Server', 'DAX', 'Azure DevOps'],
                impact: 'Enterprise-wide adoption',
                metrics: 'Cross-team visibility & insights'
              },
              {
                title: 'Data Quality Framework',
                description: 'Implemented governance and data quality checks for compliance and audit readiness. Created automated data validation pipelines.',
                tech: ['SQL', 'Python', 'Tableau', 'ETL'],
                impact: '99.5% data accuracy',
                metrics: 'Audit-ready compliance'
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
                <div className="pt-4 border-t border-purple-500/20">
                  <p className="text-sm text-cyan-400 font-semibold">{project.impact}</p>
                  <p className="text-xs text-gray-500 mt-1">{project.metrics}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-12"
          >
            Education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-6"
          >
            {[
              {
                degree: 'MCA - Computer Science',
                school: 'Chandigarh University',
                year: 'Expected 2026',
                icon: '🎓'
              },
              {
                degree: 'BCA - Computer Science',
                school: 'Poornima University, Jaipur',
                year: '2021',
                icon: '📚'
              },
              {
                degree: '12th (PCM)',
                school: 'S.A.B Inter College, Agra',
                year: '2018',
                icon: '✏️'
              }
            ].map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="group border-l-4 border-purple-500 pl-8 py-4 hover:border-cyan-500 transition-colors relative"
              >
                <div className="absolute -left-3 top-4 w-5 h-5 bg-purple-500 rounded-full group-hover:bg-cyan-500 transition-colors"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-purple-400 font-semibold text-sm mt-1">{edu.school}</p>
                  </div>
                  <span className="text-xs bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">{edu.year}</span>
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
            Open to FinTech, Digital Banking, and Data-driven Operations roles. Let's build something amazing together!
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

          <div className="space-y-2">
            <p className="text-gray-400">
              Email: <a href="mailto:neerajkankauriya@gmail.com" className="text-purple-400 hover:text-cyan-400 font-semibold transition-colors">neerajkankauriya@gmail.com</a>
            </p>
            <p className="text-gray-400">
              Phone: <span className="text-purple-400 font-semibold">+91-7895272496</span>
            </p>
            <p className="text-gray-400">
              Location: <span className="text-purple-400 font-semibold">Gurugram, Haryana</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-purple-500/20 py-8 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Neeraj Sharma. Built with Next.js, React, Framer Motion, and Tailwind CSS. Deployed on Vercel.</p>
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