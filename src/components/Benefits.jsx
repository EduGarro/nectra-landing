import { BarChart3, Gauge, CheckCircle2 } from 'lucide-react';
import { GlowingEffect } from './ui/GlowingEffect';

function Benefits() {
    const benefits = [
        {
            icon: BarChart3,
            title: 'Reducción del Trabajo Manual',
            description: 'Automatiza tareas repetitivas y ahorra tiempo. Desde respuestas a clientes hasta documentos: la IA se encarga, tu equipo se enfoca en lo importante.',
            gradient: 'from-red-500/20 to-pink-500/20'
        },
        {
            icon: Gauge,
            title: 'Mayor Velocidad Operativa',
            description: 'Respuestas en segundos, decisiones en tiempo real. Elimina cuellos de botella con flujos automatizados y agentes que trabajan 24/7.',
            gradient: 'from-orange-500/20 to-red-500/20'
        },
        {
            icon: CheckCircle2,
            title: 'Menos Errores Humanos',
            description: 'Toma de decisiones más precisa y estandarizada. Automatizar significa menos fallos, menos retrabajos y más calidad en cada proceso.',
            gradient: 'from-blue-500/20 to-purple-500/20'
        },
    ];

    return (
        <section id="beneficios" className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-gold-300 text-sm font-semibold tracking-wider uppercase mb-4 reveal">
                        BENEFICIOS
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 reveal">
                        Optimiza, Acelera y <span className="text-gradient-gold">Automatiza</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto reveal">
                        Reduce los costes operativos y elimina tareas repetitivas con soluciones inteligentes que mejoran la eficiencia y la precisión en cada proceso.
                    </p>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-300/10 reveal"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* GlowingEffect */}
                            <GlowingEffect
                                disabled={false}
                                proximity={150}
                                blur={10}
                                spread={30}
                            />

                            {/* Card Background with Glassmorphism */}
                            <div className="absolute inset-0 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] transition-all duration-300 group-hover:border-gold-400/30 group-hover:bg-white/[0.04]"></div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${benefit.gradient}`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl icon-gold mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-gold-300/20">
                                    <benefit.icon className="w-8 h-8 text-gold-300" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-gold-200 transition-colors">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefits;
