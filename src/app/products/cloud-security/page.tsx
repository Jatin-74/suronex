// app/products/cloud-security/page.tsx
"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Shield, Cloud, CheckCircle, Eye, Zap, TrendingUp, Search, Target, 
  Code, Terminal, FileText, BarChart3, Bell, Globe, Network, Lock, 
  Activity, Award, ArrowRight, Sparkles, Server, Database, Users, 
  Layers, AlertTriangle, Settings, ChevronDown, Key, Cpu, Container
} from "lucide-react"
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

export default function CloudSecurityPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <motion.div
          className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-[#D33E9E]/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#3530BA]/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CoreFeaturesShowcase />
      <ComplianceShowcase />
      <BenefitsShowcase />
      <AdvancedCapabilitiesShowcase />
      <CTASection />
      <Footer />
    </main>
  )
}

// Hero Section
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={ref} className="relative pt-32 pb-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D33E9E]/30 bg-[#D33E9E]/10 text-[#D33E9E] text-sm font-semibold mb-8 cursor-default"
            >
              <Shield className="w-4 h-4" />
              Cloud Security
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Safeguard your{" "}
              <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
                multi-cloud
              </span>{" "}
              infrastructure
            </h1>

            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              Suronex safeguards your AWS, Azure, and Google Cloud environments by eliminating misconfigurations, ensuring compliance, and strengthening your security posture. All in a truly multi-cloud ecosystem.
            </p>

            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Suronex is a security solution that automatically identifies and remediates risks across your cloud infrastructure. Our Cloud Security platform continuously monitors your cloud environments, detects misconfigurations, ensures compliance with industry standards, and provides actionable insights to strengthen your security posture.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(211, 62, 158, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-lg font-semibold text-lg transition-all"
              >
                Book a Demo
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold text-lg transition-all"
              >
                See in Action
              </motion.button>
            </div>

            {/* Cloud Provider Badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'AWS', color: 'from-orange-500 to-yellow-500' },
                { name: 'Azure', color: 'from-blue-500 to-cyan-500' },
                { name: 'GCP', color: 'from-red-500 to-pink-500' }
              ].map((provider, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`px-5 py-2 rounded-lg bg-gradient-to-r ${provider.color} bg-opacity-10 border border-white/20 font-semibold cursor-default`}
                >
                  {provider.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - MASSIVE Hero Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ y: -10, rotateY: -3 }}
                transition={{ duration: 0.3 }}
                className="relative"
                style={{
                  transform: 'perspective(1400px) rotateY(-8deg) rotateX(4deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
                  <div className="relative h-full flex items-center justify-center p-12">
                    <div className="text-center">
                      <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D33E9E]/30 to-[#3530BA]/30 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Shield className="w-12 h-12 text-white" />
                      </motion.div>
                      <div className="text-white text-2xl font-bold mb-3">
                        📸 INSERT HERO SCREENSHOT
                      </div>
                      <div className="text-gray-400 max-w-md">
                        Multi-cloud Security Dashboard - Real-time threat detection, compliance monitoring, and automated remediation
                      </div>
                    </div>
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/10 via-transparent to-[#3530BA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
                <div className="absolute -inset-8 bg-gradient-to-r from-[#D33E9E]/30 via-purple-500/20 to-[#3530BA]/30 blur-3xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: '95%', label: 'of cloud security incidents', sublabel: 'caused by misconfigurations' },
    { value: '83%', label: 'reduction in security incidents', sublabel: 'with automated CSPM' },
    { value: '60%', label: 'faster compliance reporting', sublabel: 'and audit preparation' },
    { value: '40%', label: 'improvement in team efficiency', sublabel: 'cloud security operations' }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center cursor-default group"
            >
              <div className="relative inline-block mb-6">
                <motion.div 
                  className="text-7xl font-bold bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-[#D33E9E]/20 to-[#3530BA]/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Core Features Showcase - COMPLETE
function CoreFeaturesShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Continuous Cloud Discovery & Inventory",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      items: [
        { title: "Asset Discovery", desc: "Automatically discover and catalog all cloud resources across AWS, Azure, GCP, and hybrid environments" },
        { title: "Resource Relationship Mapping", desc: "Visualize dependencies and relationships between cloud resources" },
        { title: "Shadow IT Detection", desc: "Identify unauthorized cloud services and resources across your organization" }
      ]
    },
    {
      title: "Automated Security Assessment",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      items: [
        { title: "1250+ Security Checks", desc: "Comprehensive library of security policies based on cloud provider best practices" },
        { title: "Custom Policy Engine", desc: "Create and deploy custom security policies tailored to your organization" },
        { title: "Risk-Based Prioritization", desc: "AI-powered risk scoring that considers business impact, exploitability, and environmental context" },
        { title: "Baseline Compliance Monitoring", desc: "Establish security baselines and monitor deviations automatically" },
        { title: "AI Guided Remediation", desc: "Step by step guide for remediation for console or CLI" }
      ]
    }
  ]

const ActiveIcon = features[activeFeature].icon

  return (
    <section ref={ref} className="py-32 border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Core Features & Capabilities</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive cloud security with intelligent automation
          </p>
        </motion.div>

        {/* Feature Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((feature, i) => (
            <button
              key={i}
              onClick={() => setActiveFeature(i)}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all ${
                activeFeature === i
                  ? 'bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* HUGE Feature Screenshot */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 group"
        >
          <motion.div
            whileHover={{ y: -15, scale: 1.01 }}
            transition={{ duration: 0.4 }}
            style={{
              transform: 'perspective(1600px) rotateX(4deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-white/10 shadow-2xl">
              <div className="relative h-full flex items-center justify-center p-16">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${features[activeFeature].color} opacity-20 flex items-center justify-center`}
                  >
                  <ActiveIcon className="w-16 h-16 text-white" />
		 </motion.div>
                  <div className="text-white text-3xl font-bold mb-4">
                    📸 INSERT: {features[activeFeature].title}
                  </div>
                  <div className="text-gray-400 text-lg max-w-2xl mx-auto">
                    {activeFeature === 0 
                      ? "Real-time asset discovery dashboard showing AWS, Azure, GCP resources with relationship mapping and shadow IT alerts"
                      : "Security assessment console with 1250+ checks, custom policies, AI risk scoring, and guided remediation"}
                  </div>
                </div>
                
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className={`absolute -inset-12 bg-gradient-to-r ${features[activeFeature].color} opacity-30 blur-3xl -z-10 group-hover:opacity-60 transition-opacity duration-700`} />
          </motion.div>
        </motion.div>

        {/* Feature Details Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features[activeFeature].items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 10, scale: 1.02 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl group hover:border-[#D33E9E]/30 transition-all cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold mb-2 group-hover:text-[#D33E9E] transition-colors">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Compliance Showcase - COMPLETE
function ComplianceShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const frameworks = [
    'SOC 2', 'ISO 27001', 'PCI DSS', 'HIPAA', 'SEBI CSF', 'RBI CSF', 
    'GDPR', 'CIS Benchmarks', 'NIST', 'FedRAMP', 'CCPA', 'Custom'
  ]

  const complianceFeatures = [
    "Audit-ready documentation generation",
    "Compliance trend tracking and analytics",
    "Executive compliance dashboards",
    "Regulatory change notifications",
    "Cross-cloud security policy management",
    "Consolidated compliance reporting"
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Multi-Framework Compliance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Supported 50+ Compliance Frameworks including SOC 2, ISO 27001, PCI DSS, HIPAA, SEBI CSF, RBI CSF, GDPR, CIS Benchmarks, Custom regulatory requirements and many more.
          </p>
        </motion.div>

        {/* HUGE Compliance Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-20 group"
        >
          <motion.div
            whileHover={{ y: -15, scale: 1.01 }}
            transition={{ duration: 0.4 }}
            style={{
              transform: 'perspective(1600px) rotateX(3deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
              <div className="relative h-full flex items-center justify-center p-16">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center"
                  >
                    <FileText className="w-16 h-16 text-green-400" />
                  </motion.div>
                  <div className="text-white text-3xl font-bold mb-4">
                    📸 INSERT: Compliance Dashboard
                  </div>
                  <div className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Multi-framework compliance view showing SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR status with audit-ready documentation
                  </div>
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="absolute -inset-12 bg-gradient-to-r from-green-500/40 via-emerald-500/30 to-teal-500/40 blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        {/* Framework Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {frameworks.map((framework, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-semibold text-lg hover:border-[#D33E9E]/50 hover:bg-white/10 transition-all cursor-pointer"
            >
              {framework}
            </motion.div>
          ))}
        </div>

        {/* Compliance Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.05 }}
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-green-500/30 transition-all cursor-default"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Benefits Showcase - ALL 3 Categories
function BenefitsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      title: "Accelerate Compliance",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      items: [
        { title: "Continuous Compliance Monitoring", desc: "Compliance status across multiple frameworks" },
        { title: "Automated Evidence Collection", desc: "Gather and organize compliance evidence automatically" },
        { title: "Streamlined Audit Preparation", desc: "Generate audit-ready reports in minutes, not weeks" },
        { title: "Regulatory Change Management", desc: "Stay current with evolving compliance requirements" }
      ]
    },
    {
      title: "Reduce Security Risk",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      items: [
        { title: "Eliminate Misconfigurations", desc: "Proactively identify and fix security misconfigurations before they can be exploited" },
        { title: "Strengthen Access Controls", desc: "Monitor and optimize IAM permissions, roles, and policies across all clouds" },
        { title: "Enhance Network Security", desc: "Ensure proper network segmentation, firewall rules, and encryption settings" },
        { title: "Prevent Data Exposure", desc: "Identify publicly accessible resources and overly permissive access policies" }
      ]
    },
    {
      title: "Improve Operational Efficiency",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      items: [
        { title: "Reduce Manual Work", desc: "Automate 80% of routine security configuration tasks" },
        { title: "Centralized Management", desc: "Single pane of glass for multi-cloud security management" },
        { title: "Intelligent Alerting", desc: "Reduce alert fatigue with context-aware, prioritized notifications" },
        { title: "Team Collaboration", desc: "Built-in workflows for security team collaboration and task assignment" }
      ]
    }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Key Benefits</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Measurable improvements across security, compliance, and operations
          </p>
        </motion.div>

        <div className="space-y-32">
          {benefits.map((benefit, i) => {
            const IconComponent = benefit.icon
            return (
              <div key={i} className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Screenshot */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  className={`group ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  <motion.div
                    whileHover={{ x: i % 2 === 0 ? -10 : 10, y: -10, rotateY: i % 2 === 0 ? 3 : -3 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      transform: `perspective(1200px) rotateY(${i % 2 === 0 ? '8deg' : '-8deg'})`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
                      <div className="relative h-full flex items-center justify-center p-12">
                        <div className="text-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-20 flex items-center justify-center`}
                          >
                            <IconComponent className="w-12 h-12 text-white" />
                          </motion.div>
                          <div className="text-white text-2xl font-bold mb-3">
                            📸 INSERT: {benefit.title}
                          </div>
                          <div className="text-gray-400 max-w-md">
                            Dashboard showing {benefit.title.toLowerCase()} metrics and automated workflows
                          </div>
                        </div>
                        
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                      </div>
                    </div>
                    <div className={`absolute -inset-8 bg-gradient-to-r ${benefit.color} opacity-30 blur-3xl -z-10 group-hover:opacity-60 transition-opacity`} />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold">{benefit.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {benefit.items.map((item, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + j * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="cursor-default"
                      >
                        <div className="font-semibold text-lg mb-2">{item.title}</div>
                        <div className="text-gray-400">{item.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Advanced Capabilities Showcase
function AdvancedCapabilitiesShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const capabilities = [
    {
      title: "AI-Powered Security Intelligence",
      icon: Activity,
      color: "from-purple-500 to-pink-500",
      items: [
        { title: "Anomaly Detection", desc: "Machine learning algorithms identify unusual patterns and potential threats" },
        { title: "Predictive Analytics", desc: "Forecast security risks and compliance gaps before they occur" },
        { title: "Smart Recommendations", desc: "AI-driven suggestions for security improvements and optimizations" },
        { title: "Behavioral Analysis", desc: "Understand normal vs. abnormal resource behavior patterns" }
      ]
    },
    {
      title: "Advanced Reporting & Analytics",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      items: [
        { title: "Executive Dashboards", desc: "C-level visibility into cloud security posture and trends" },
        { title: "Custom Reports", desc: "Build tailored reports for different stakeholders and use cases" },
        { title: "Trend Analysis", desc: "Historical analysis of security posture improvements and compliance trends" },
        { title: "Benchmarking", desc: "Compare your security posture against industry peers and best practices" }
      ]
    }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Advanced Capabilities</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade intelligence and analytics powered by AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {capabilities.map((capability, i) => {
            const IconComponent = capability.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 group hover:border-[#D33E9E]/30 transition-all cursor-default"
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold group-hover:text-[#D33E9E] transition-colors">{capability.title}</h3>
                </div>

                <div className="space-y-4">
                  {capability.items.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.2 + j * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex gap-3"
                    >
                      <Sparkles className="w-5 h-5 text-[#D33E9E] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold mb-1">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Are you ready to start?
          </h2>
          <p className="text-2xl text-gray-400 mb-12">
            Suronex provides customised solutions to safeguard your data, ensuring compliance, protection, and peace of mind. Take control of your security today!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(211, 62, 158, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-lg font-semibold text-xl"
            >
              Book a Demo
              <ArrowRight className="w-6 h-6" />
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-white/20 rounded-lg font-semibold text-xl hover:bg-white/10 transition-all"
            >
              See Suronex in Action
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

