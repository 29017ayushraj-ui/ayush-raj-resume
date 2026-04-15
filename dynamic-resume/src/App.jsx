import React from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Database, 
  Cpu, 
  Code2, 
  Award,
  Download,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react'

const resumeData = {
  name: "Ayush Raj",
  title: "Data & Platform Engineer",
  summary: "Results-driven Data & Platform Engineer with 2+ years of experience in architecting scalable ETL pipelines, optimizing cloud infrastructure, and improving data reliability. Expert in the Databricks/GCP ecosystem and AI-augmented engineering workflows.",
  contact: {
    location: "Bangalore, India",
    phone: "9142833856",
    email: "araj624529017@gmail.com",
    linkedin: "https://linkedin.com/in/ayush-raj-3a0340207/",
    github: "https://github.com/ayushraj29017"
  },
  skills: [
    { name: "Python", category: "Language" },
    { name: "SQL", category: "Language" },
    { name: "Java (Spring Boot)", category: "Language" },
    { name: "Databricks", category: "Data" },
    { name: "Apache Spark", category: "Data" },
    { name: "Airflow", category: "Data" },
    { name: "BigQuery", category: "Data" },
    { name: "GCP", category: "Cloud" },
    { name: "Gemini", category: "AI" },
    { name: "Claude AI", category: "AI" },
    { name: "Antigravity", category: "AI" },
    { name: "CI/CD", category: "DevOps" }
  ],
  experience: [
    {
      role: "Data Engineer",
      company: "Zebra (via ETeams)",
      period: "Oct 2025 – Present",
      metrics: [
        "25-30% reduction in pipeline runtime",
        "40% faster incident investigation",
        "15% reduction in compute costs"
      ],
      description: "Architected Databricks ETL pipelines and enterprise Job Monitoring frameworks using Airflow and BigQuery."
    },
    {
      role: "Product Engineer",
      company: "Effigo (Bob eProcure)",
      period: "June 2024 – Oct 2025",
      metrics: [
        "40% reduction in manual intervention",
        "25-30% faster query execution",
        "35% lower defect rates"
      ],
      description: "Led Central Procurement workflow design and PostgreSQL migration for 5,000+ users."
    }
  ],
  projects: [
    {
      name: "Viral Clip Engine",
      tech: "Python, MoviePy, Gemma 4",
      desc: "Automated video generation engine using LLMs and media APIs for trend-based publishing."
    },
    {
      name: "End-to-End Data Pipeline",
      tech: "GCP, PySpark, BigQuery",
      desc: "Cloud-native ETL pipeline processing raw datasets into analytics-ready tables."
    }
  ]
}

const Section = ({ title, children, icon: Icon }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-8">
      {Icon && <Icon className="text-blue-500" size={28} />}
      <h2 className="section-title mb-0">{title}</h2>
    </div>
    {children}
  </motion.section>
)

const Card = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass card ${className}`}
  >
    {children}
  </motion.div>
)

const TypingText = ({ texts }) => {
  const [index, setIndex] = React.useState(0)
  const [displayText, setDisplayText] = React.useState('')
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const currentText = texts[index]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1))
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setIndex((index + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, index, texts])

  return (
    <span className="text-xl md:text-2xl text-blue-400 font-medium min-h-[1.5em] block">
      {displayText}
      <span className="animate-pulse inline-block w-1 h-6 bg-blue-400 ml-1"></span>
    </span>
  )
}

function App() {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const bangaloreTime = time.toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  return (
    <div className="min-h-screen text-gray-200 py-12 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Background Blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Live Status Bar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center mb-12 glass p-4 rounded-2xl border-white/5"
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">Available for Hire</span>
        </div>
        <div className="flex items-center gap-3 text-sm font-mono text-blue-400">
          <MapPin size={14} />
          <span>Bangalore, IN — {bangaloreTime}</span>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
          <div className="bg-[#0d0d12] rounded-full p-2" style={{ backgroundColor: '#0d0d12' }}>
            <Sparkles className="text-blue-400" size={32} />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {resumeData.name}
          </span>
        </h1>
        
        <TypingText texts={["Data & Platform Engineer", "Databricks Specialist", "Python Developer", "AI-Augmented Architect"]} />
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <span className="flex items-center gap-2"><MapPin size={16}/> {resumeData.contact.location}</span>
          <span className="flex items-center gap-2"><Mail size={16}/> {resumeData.contact.email}</span>
          <span className="flex items-center gap-2"><Phone size={16}/> {resumeData.contact.phone}</span>
        </div>

        <div className="flex justify-center gap-6 mt-10" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
          <motion.a whileHover={{ scale: 1.1 }} href={resumeData.contact.github} className="p-3 glass rounded-xl hover:text-blue-400 transition-colors" style={{ padding: '0.75rem', borderRadius: '0.75rem' }}><Github size={24}/></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href={resumeData.contact.linkedin} className="p-3 glass rounded-xl hover:text-blue-400 transition-colors" style={{ padding: '0.75rem', borderRadius: '0.75rem' }}><Linkedin size={24}/></motion.a>
          <motion.button whileHover={{ scale: 1.1 }} 
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#2563eb', borderRadius: '0.75rem', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            <Download size={20}/> Resume PDF
          </motion.button>
        </div>
      </motion.header>

      {/* Summary */}
      <Section title="Overview" icon={Terminal}>
        <Card className="text-lg leading-relaxed text-gray-300 border-l-4 border-blue-500">
          {resumeData.summary}
        </Card>
      </Section>

      {/* Skills */}
      <Section title="Tech Stack" icon={Cpu}>
        <div className="flex flex-wrap gap-4">
          {resumeData.skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: '#60a5fa',
                boxShadow: '0 0 20px rgba(96, 165, 250, 0.2)' 
              }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-3 glass rounded-2xl border border-white/5 cursor-default relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <span className="text-gray-400 text-[10px] block mb-1 uppercase tracking-[0.2em] font-bold">{skill.category}</span>
               <span className="font-extrabold text-gray-100 text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience" icon={Layers}>
        <div className="space-y-6">
          {resumeData.experience.map((exp, i) => (
            <Card key={i}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 glass px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <p className="text-gray-400 mb-6">{exp.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exp.metrics.map((m, j) => (
                  <div key={j} className="p-3 bg-white/5 rounded-lg border border-white/5 text-sm font-semibold text-blue-300">
                    {m}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="Featured Projects" icon={Code2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.projects.map((proj, i) => (
            <Card key={i} className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{proj.name}</h3>
                <ExternalLink size={20} className="text-gray-500" />
              </div>
              <p className="text-gray-400 mb-6 flex-grow">{proj.desc}</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-xs font-mono text-purple-400">{proj.tech}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 Ayush Raj • Built with React & Antigravity</p>
      </footer>
    </div>
  )
}

export default App
