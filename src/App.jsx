import { useState, useEffect, createContext, useContext } from 'react'
import {
  Menu, X, Search, Users, FileText, Lightbulb, Map, Code, Settings,
  ChevronDown, ChevronUp, Bot, Receipt, Target, MessageCircle,
  Zap, ArrowRight, Check, Sparkles, Clock, Cog, Headphones,
  Info, Loader2, Send, MessageSquare
} from 'lucide-react'

// ==================== MODAL CONTEXT ====================
const ModalContext = createContext()

function useModal() {
  return useContext(ModalContext)
}

// ==================== CTA BUTTON (Opens Modal) ====================
function CTAButton({ children, className, onClick }) {
  const { openModal } = useModal()

  const handleClick = () => {
    if (onClick) onClick()
    openModal()
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

// ==================== HEADER COMPONENT (FLOATING PILL) ====================
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Diferencia', href: '#diferencia' },
    { name: 'Enfoque', href: '#enfoque' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      {/* Floating Pill Container */}
      <div className={`flex items-center justify-between w-full max-w-5xl px-4 sm:px-6 py-3 rounded-full transition-all duration-500 ${isScrolled
        ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl'
        : 'bg-white/5 backdrop-blur-md border border-white/5'
        }`}>
        {/* Logo - Left */}
        <a href="#" className="flex items-center gap-2 group flex-shrink-0">
          <img
            src="/Logo Nectra.jpeg"
            alt="Nectra"
            className="w-10 h-10 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg font-display font-bold text-gradient-gold hidden sm:block">
            NECTRA
          </span>
        </a>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-gold-300 transition-colors duration-300 font-medium text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button - Right */}
        <div className="hidden md:block flex-shrink-0">
          <CTAButton className="btn-gold px-5 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
            Empecemos
            <ArrowRight size={14} />
          </CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 animate-fade-up">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-gold-300 transition-colors py-2 font-medium"
              >
                {link.name}
              </a>
            ))}
            <CTAButton
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold px-6 py-3 rounded-full text-center font-semibold mt-4 w-full"
            >
              Empecemos
            </CTAButton>
          </nav>
        </div>
      )}
    </header>
  )
}

// ==================== HERO SECTION ====================
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="hero-gradient top-20 -right-40"></div>
      <div className="hero-gradient bottom-20 -left-40 opacity-50"></div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-300/30 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-400/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gold-300/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main Heading - Large and Bold like BuildRoom */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.1] mb-8 reveal active">
          <span className="text-white">Más control.</span>
          <br />
          <span className="text-white">Menos fricción.</span>
          <br />
          <span className="text-gradient-gold">Todo automatizado.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto mb-14 reveal active leading-relaxed">
          Creamos e implementamos soluciones de IA que atraen clientes, reducen costos y aumentan los ingresos en <span className="text-gold-300 font-medium">semanas, no en meses.</span>
        </p>

        {/* CTA Button - Large and Prominent */}
        <div className="flex justify-center items-center reveal active mb-24">
          <CTAButton className="btn-gold px-10 py-5 rounded-full text-lg font-bold inline-flex items-center gap-3 animate-pulse-gold">
            Agenda una consulta
            <ArrowRight size={22} />
          </CTAButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold-300 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

// ==================== SOCIAL PROOF SECTION ====================
function SocialProof() {
  const metrics = [
    { value: '+50', label: 'Procesos automatizados' },
    { value: '+200', label: 'Horas ahorradas/mes' },
    { value: '3x', label: 'ROI promedio' },
  ]

  const clients = [
    'Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4', 'Cliente 5',
    'Cliente 6', 'Cliente 7', 'Cliente 8', 'Cliente 9', 'Cliente 10'
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="section-divider mb-16"></div>

      {/* Metrics */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 text-center reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl sm:text-6xl font-display font-bold text-gradient-gold mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Logos Ticker */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10"></div>

        <div className="overflow-hidden">
          <div className="ticker-container">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-16 mx-6 glass rounded-xl flex items-center justify-center text-gray-500 font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== SERVICES SECTION (2x2 GRID) ====================
function Services() {
  const services = [
    {
      icon: Bot,
      title: 'Agentes de IA',
      description: 'Atención al cliente inteligente 24/7 que se siente humana.',
      points: [
        'Asistentes de voz para llamadas que atienden a tus clientes 24/7',
        'Respuestas instantáneas y personalizadas en WhatsApp e Instagram',
        'Agendamiento de citas y soporte nivel 1'
      ],
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      icon: Code,
      title: 'Aplicaciones personalizadas y micro SaaS',
      description: 'Builds que convierten ideas en productos.',
      points: [
        'Aplicaciones web y paneles impulsados por IA',
        'Desarrollo de micro-SaaS para negocios de nicho',
        'Páginas de destino, Sitios web y Productos digitales'
      ],
      gradient: 'from-orange-500/20 to-amber-500/20'
    },
    {
      icon: Zap,
      title: 'Flujos de trabajo automatizados',
      description: 'Ahorra tiempo y escala más rápido con automatizaciones empresariales impulsadas por IA.',
      points: [
        'Redes sociales y sistema de publicación de contenidos',
        'CRM, generación de leads y automatizaciones de seguimiento',
        'Flujos de trabajo back-office (recordatorios, reportes, programación)'
      ],
      gradient: 'from-pink-500/20 to-rose-500/20'
    },
    {
      icon: Receipt,
      title: 'Automatizaciones de Facturación',
      description: 'Elimina el error humano de tus finanzas.',
      points: [
        'Generación y envío automático de facturas',
        'Conciliación de pagos y control de gastos',
        'Sincronización con software contable'
      ],
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
  ]

  return (
    <section id="servicios" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-300 text-sm font-semibold tracking-wider uppercase mb-4 reveal">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 reveal">
            Soluciones de IA <span className="text-gradient-gold">a tu medida</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto reveal">
            Sistemas personalizados que transforman ideas en motores de crecimiento — escala tu negocio sin agregar horas extras ni más personal.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bento-card rounded-3xl p-8 relative overflow-hidden group min-h-[320px] flex flex-col reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <div className="icon-gold icon-float w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-gold-300/20">
                  <service.icon className="w-7 h-7 text-gold-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-2 group-hover:text-gold-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gold-400/80 text-sm font-medium mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                      <Check className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-6 h-6 text-gold-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <CTAButton className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-medium transition-colors">
            ¿No sabes por dónde empezar? Agenda una llamada de descubrimiento
            <ArrowRight size={18} />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

// ==================== NECTRA DIFFERENCE SECTION ====================
function NectraDifference() {
  const differences = [
    {
      icon: Clock,
      metric: '+60%',
      metricLabel: 'Velocidad',
      title: 'Implementación Rápida',
      description: 'Pasamos del concepto al despliegue en semanas, acelerando tu retorno de inversión.',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Cog,
      metric: '100%',
      metricLabel: 'A Medida',
      title: 'Soluciones Personalizadas',
      description: 'Sin plantillas genéricas. Cada automatización se adapta a los flujos únicos de tu negocio.',
      gradient: 'from-gold-300/10 to-gold-500/10'
    },
    {
      icon: Headphones,
      metric: '24/7',
      metricLabel: 'Soporte Continuo',
      title: 'Monitoreo Constante',
      description: 'Monitoreo constante y optimización para asegurar que tus sistemas nunca se detengan.',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
  ]

  return (
    <section id="diferencia" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-300 text-sm font-semibold tracking-wider uppercase mb-4 reveal">
            Por Qué Elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 reveal">
            La Diferencia <span className="text-gradient-gold">Nectra</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto reveal">
            Por qué las empresas líderes eligen Nectra para acelerar su transformación digital.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differences.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-300/10 reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card Background with Glassmorphism */}
              <div className="absolute inset-0 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] transition-all duration-300 group-hover:border-gold-400/30 group-hover:bg-white/[0.04]"></div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold-300/5 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl icon-gold mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-gold-300/20">
                  <item.icon className="w-8 h-8 text-gold-300" />
                </div>

                {/* Large Metric */}
                <div className="mb-4">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-gradient-gold">
                    {item.metric}
                  </span>
                  {item.metricLabel && (
                    <span className="block text-xl text-gold-400 font-semibold mt-1">
                      {item.metricLabel}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <p className="text-gray-400 mb-6">¿Listo para experimentar la diferencia?</p>
          <CTAButton className="btn-gold px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-3">
            Comienza Hoy
            <ArrowRight size={20} />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

// ==================== PROCESS SECTION ====================
function Process() {
  const steps = [
    {
      number: '01',
      title: 'Descubrimiento',
      subtitle: 'Encuentra la palanca',
      description: 'Identificamos las oportunidades de mayor ROI para implementar IA en tu negocio — ya sea automatizar la generación de leads, ahorrar más de 20 horas a la semana, o lanzar una herramienta para tus clientes.',
      icon: Target
    },
    {
      number: '02',
      title: 'Estrategia',
      subtitle: 'Mapear el camino',
      description: 'En lugar de planes interminables de "transformación digital", creamos una hoja de ruta clara que muestra exactamente qué lanzar primero, qué tan rápido se amortiza y cómo escalarlo.',
      icon: Map
    },
    {
      number: '03',
      title: 'Desarrollo',
      subtitle: 'Construye lo que viene',
      description: 'Desde automatizaciones hasta aplicaciones completas, desarrollamos e implementamos los sistemas que impulsan la adquisición de clientes, la eficiencia y nuevos ingresos — sin complejidad técnica.',
      icon: Code
    },
    {
      number: '04',
      title: 'Integración',
      subtitle: 'Haz que funcione',
      description: 'No solo entregamos un sistema. Lo integramos en tus flujos de trabajo, capacitamos a tu equipo y aseguramos que funcione sin problemas para que veas resultados desde el primer día.',
      icon: Settings
    },
  ]

  return (
    <section id="enfoque" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="hero-gradient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-gold-300 text-sm font-semibold tracking-wider uppercase mb-4 reveal">
            Nuestro Enfoque
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 reveal">
            Un proceso probado para convertir <br className="hidden sm:block" />
            <span className="text-gradient-gold">la IA en crecimiento</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-8 sm:p-10 relative reveal group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold-300/10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-gradient-gold opacity-50 group-hover:opacity-100 transition-opacity">
                    {step.number}
                  </span>
                  <div className="icon-gold w-14 h-14 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-gold-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white">
                      {step.title}
                    </h3>
                    <span className="text-gold-400 text-sm font-medium">
                      ({step.subtitle})
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute -bottom-8 left-16 w-0.5 h-8 bg-gradient-to-b from-gold-500/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <CTAButton className="btn-gold px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-3">
            Reserva tu llamada hoy
            <ArrowRight size={20} />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

// ==================== FAQ SECTION ====================
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: '¿Cuánto tiempo toma implementar una solución de IA?',
      answer: 'Dependiendo de la complejidad, la mayoría de nuestros proyectos se completan en 2-6 semanas. Comenzamos con un MVP funcional en las primeras semanas y luego iteramos basándonos en resultados reales.'
    },
    {
      question: '¿Necesito conocimientos técnicos para usar las herramientas?',
      answer: 'No. Diseñamos todas nuestras soluciones pensando en usuarios no técnicos. Además, incluimos capacitación completa y documentación para que tu equipo pueda operar todo de forma autónoma.'
    },
    {
      question: '¿Qué tipo de empresas se benefician más de sus servicios?',
      answer: 'Trabajamos principalmente con PyMEs y empresas en crecimiento que buscan escalar sin aumentar proporcionalmente su equipo. Nuestros clientes típicos procesan alto volumen de consultas, leads o transacciones.'
    },
    {
      question: '¿Cómo miden el ROI de las implementaciones?',
      answer: 'Antes de comenzar, definimos métricas claras de éxito (horas ahorradas, leads generados, conversiones, etc.). Implementamos tracking desde el día uno y entregamos reportes mensuales de impacto.'
    },
    {
      question: '¿Ofrecen soporte continuo después de la implementación?',
      answer: 'Sí. Todos nuestros proyectos incluyen un período de soporte post-lanzamiento. También ofrecemos planes de mantenimiento continuo para optimización, actualizaciones y soporte técnico.'
    },
  ]

  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-300 text-sm font-semibold tracking-wider uppercase mb-4 reveal">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white reveal">
            ¿Tienes <span className="text-gradient-gold">preguntas</span>?
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full icon-gold flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-gold-300" />
                </div>
              </button>

              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6 reveal">
            ¿No encontraste lo que buscabas?
          </p>
          <a
            href="#contacto"
            className="glass px-8 py-4 rounded-full font-medium text-white hover:text-gold-300 transition-colors inline-flex items-center gap-2 reveal"
          >
            Contáctanos directamente
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <footer className="relative py-16 px-6">
      <div className="section-divider mb-16"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/Logo Nectra.jpeg"
              alt="Nectra"
              className="w-14 h-14 rounded-xl object-cover"
            />
            <span className="text-2xl font-display font-bold text-gradient-gold">
              NECTRA
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#servicios" className="text-gray-400 hover:text-gold-300 transition-colors">
              Servicios
            </a>
            <a href="#enfoque" className="text-gray-400 hover:text-gold-300 transition-colors">
              Enfoque
            </a>
            <a href="#faq" className="text-gray-400 hover:text-gold-300 transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <CTAButton className="btn-gold px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2">
            Agenda una consulta
            <ArrowRight size={18} />
          </CTAButton>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nectra. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ==================== CONTACT MODAL ====================
function ContactModal() {
  const { isModalOpen, closeModal } = useModal()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    sitioWeb: '',
    servicios: [],
    plazo: '',
    presupuesto: '',
    descripcion: ''
  })

  const serviciosOptions = [
    'Agentes de IA',
    'Flujos de trabajo automatizados',
    'Apps personalizadas & Micro-SaaS',
    'Automatizaciones de Facturacion'
  ]

  const plazoOptions = [
    'Lo antes posible',
    '1-3 meses',
    '3-6 meses',
    '6+ meses',
    'Solo explorando'
  ]

  const presupuestoOptions = [
    'Menos de $500',
    '$500 - $1k',
    '$1k - $2k',
    '$2k - $5k',
    '$5k +'
  ]

  const handleCheckboxChange = (servicio) => {
    setFormData(prev => ({
      ...prev,
      servicios: prev.servicios.includes(servicio)
        ? prev.servicios.filter(s => s !== servicio)
        : [...prev.servicios, servicio]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://n8n-n8n.in2ik6.easypanel.host/webhook/bdb6ebdd-82f3-4a26-987e-c3c24519696c', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setShowSuccess(true)
        setTimeout(() => {
          closeModal()
          setShowSuccess(false)
          setFormData({
            nombre: '',
            email: '',
            sitioWeb: '',
            servicios: [],
            plazo: '',
            presupuesto: '',
            descripcion: ''
          })
        }, 2000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isModalOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-dark-800/95 backdrop-blur-xl border border-gold-400/20 shadow-2xl shadow-gold-300/10 animate-scale-up">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Success State */}
        {showSuccess ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">¡Mensaje Enviado!</h3>
            <p className="text-gray-400">Nos pondremos en contacto contigo pronto.</p>
          </div>
        ) : (
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                Agenda tu <span className="text-gradient-gold">Consulta</span>
              </h2>
              <p className="text-gray-400 text-sm">Cuéntanos sobre tu proyecto</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold-400/50 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Corporativo</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold-400/50 focus:outline-none transition-colors"
                  placeholder="tu@empresa.com"
                />
              </div>

              {/* Sitio Web */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sitio Web de la Empresa</label>
                <input
                  type="url"
                  value={formData.sitioWeb}
                  onChange={(e) => setFormData({ ...formData, sitioWeb: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold-400/50 focus:outline-none transition-colors"
                  placeholder="https://tuempresa.com"
                />
              </div>

              {/* Servicios */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Servicios de Interés</label>
                <div className="grid grid-cols-2 gap-3">
                  {serviciosOptions.map((servicio) => (
                    <label
                      key={servicio}
                      className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all ${formData.servicios.includes(servicio)
                        ? 'bg-gold-400/20 border-gold-400/50'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                        } border`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.servicios.includes(servicio)}
                        onChange={() => handleCheckboxChange(servicio)}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${formData.servicios.includes(servicio)
                        ? 'bg-gold-400 border-gold-400'
                        : 'border-gray-500'
                        }`}>
                        {formData.servicios.includes(servicio) && (
                          <Check className="w-3 h-3 text-black" />
                        )}
                      </div>
                      <span className="text-sm text-gray-300">{servicio}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Plazo */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Plazo del Proyecto</label>
                <select
                  value={formData.plazo}
                  onChange={(e) => setFormData({ ...formData, plazo: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-gold-400/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-dark-800">Selecciona un plazo</option>
                  {plazoOptions.map((plazo) => (
                    <option key={plazo} value={plazo} className="bg-dark-800">{plazo}</option>
                  ))}
                </select>
              </div>

              {/* Presupuesto */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  Presupuesto Estimado
                  <div className="relative">
                    <Info
                      size={14}
                      className="opacity-40 hover:opacity-100 cursor-help transition-opacity"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    />
                    {showTooltip && (
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-64 p-3 rounded-xl bg-black/95 border border-gold-400/30 text-xs text-gray-300 z-50 shadow-xl">
                        La moneda de facturación y cobro se definirá según la preferencia fiscal del cliente y su ubicación. Solo es un precio de referencia.
                      </div>
                    )}
                  </div>
                </label>
                <select
                  value={formData.presupuesto}
                  onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-gold-400/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-dark-800">Selecciona un rango</option>
                  {presupuestoOptions.map((presupuesto) => (
                    <option key={presupuesto} value={presupuesto} className="bg-dark-800">{presupuesto}</option>
                  ))}
                </select>
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">¿Qué estás buscando construir?</label>
                <textarea
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold-400/50 focus:outline-none transition-colors resize-none"
                  placeholder="Describe brevemente tu proyecto o necesidad..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Solicitud
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

// ==================== NECTRA CHAT WIDGET ====================
function NectraChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '¡Hola! Soy el asistente de Nectra. ¿En qué puedo ayudarte hoy?' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('https://n8n-n8n.in2ik6.easypanel.host/webhook/fa1ef95b-f56e-472f-90f5-92e28fc6e9af/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatInput: userMessage })
      })

      const data = await response.text()
      setMessages(prev => [...prev, { role: 'assistant', content: data || 'Gracias por tu mensaje. Un agente se pondrá en contacto contigo.' }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, hubo un error. Por favor intenta de nuevo.' }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 shadow-lg shadow-gold-400/30 flex items-center justify-center z-[90] transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gold-400/50 animate-pulse-gold"
        aria-label="Abrir chat de Nectra"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-dark-900" />
        ) : (
          <MessageSquare className="w-7 h-7 text-dark-900" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[70vh] rounded-3xl bg-dark-800/95 backdrop-blur-xl border border-gold-400/20 shadow-2xl shadow-gold-300/10 z-[90] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center">
              <Bot className="w-5 h-5 text-dark-900" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Asistente Nectra</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400">En línea</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${msg.role === 'user'
                    ? 'bg-gold-400/20 text-gold-100 rounded-br-md'
                    : 'bg-white/5 text-gray-300 rounded-bl-md'
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold-400/50 focus:outline-none transition-colors text-sm"
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="w-12 h-12 rounded-xl bg-gold-400 flex items-center justify-center text-dark-900 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold-300 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// ==================== SCROLL REVEAL HOOK ====================
function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    revealElements.forEach(el => observer.observe(el))

    return () => revealElements.forEach(el => observer.unobserve(el))
  }, [])
}

// ==================== MAIN APP ====================
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useScrollReveal()

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      <div className="min-h-screen bg-dark-900 relative">
        {/* Animated Background Orbs */}
        <div className="animated-bg">
          <div className="bg-orb bg-orb-1"></div>
          <div className="bg-orb bg-orb-2"></div>
          <div className="bg-orb bg-orb-3"></div>
        </div>

        <Header />
        <main className="relative z-10">
          <Hero />
          <SocialProof />
          <Services />
          <NectraDifference />
          <Process />
          <FAQ />
        </main>
        <Footer />
        {/* <NectraChat /> */}
        <ContactModal />
      </div>
    </ModalContext.Provider>
  )
}

export default App
