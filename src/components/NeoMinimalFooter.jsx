import React from 'react';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export function NeoMinimalFooter() {
    return (
        <footer className="max-w-7xl mx-auto bg-dark-900/50 border-t rounded-t-lg border-gold-400/10 pt-16 pb-8 relative overflow-hidden">

            {/* Background Tech Pattern with Nectra colors */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

                    {/* Brand Column (Span 5) */}
                    <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="/Logo Nectra.jpeg"
                                alt="Nectra"
                                className="w-10 h-10 rounded-lg object-cover"
                            />
                            <h2 className="text-2xl font-display font-bold tracking-tighter text-white">
                                NECTRA
                            </h2>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Soluciones de IA personalizadas que atraen clientes, reducen costos y aumentan los ingresos.
                            Construido para velocidad, diseñado para asombrar.
                        </p>

                        {/* Newsletter Input */}
                        <div className="flex items-center gap-2 mt-2 group">
                            <div className="relative flex-1 max-w-xs">
                                <input
                                    type="email"
                                    placeholder="Tu email..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-400/50 transition-colors"
                                />
                            </div>
                            <button className="p-2.5 bg-gold-500 rounded-lg text-dark-900 hover:bg-gold-400 transition-colors">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {[
                        { title: "Servicios", links: ["Agentes de IA", "Aplicaciones Web", "Automatizaciones", "Consultoría"] },
                        { title: "Empresa", links: ["Nosotros", "Casos de Éxito", "Blog", "Contacto"] },
                        { title: "Legal", links: ["Privacidad", "Términos", "Cookies", "FAQ"] }
                    ].map((section, idx) => (
                        <div key={idx} className="col-span-6 md:col-span-2 flex flex-col gap-4">
                            <h4 className="text-xs font-mono font-semibold text-gold-300 uppercase tracking-widest">
                                {section.title}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-gray-400 hover:text-gold-300 transition-colors flex items-center gap-2 group w-fit">
                                            <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-gold-400 transition-all group-hover:w-4 duration-200" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                    <p className="text-xs text-gray-600 font-mono">
                        © {new Date().getFullYear()} Nectra. Todos los derechos reservados.
                    </p>

                    <div className="flex items-center gap-6">
                        {/* Socials */}
                        <div className="flex gap-4 border-r border-white/10 pr-6 mr-2">
                            {[
                                { Icon: Twitter, url: "#" },
                                { Icon: Linkedin, url: "#" },
                                { Icon: Github, url: "#" }
                            ].map(({ Icon, url }, i) => (
                                <a key={i} href={url} className="text-gray-600 hover:text-gold-300 transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/5 border border-gold-500/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                            <span className="text-[10px] uppercase font-medium text-gold-400 tracking-wider">Sistemas Operativos</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
