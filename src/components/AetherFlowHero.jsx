import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { InteractiveHoverButton } from './ui/InteractiveHoverButton';

// The main hero component (without canvas - now handled by ParticleBackground)
const AetherFlowHero = ({ openModal }) => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2 + 0.5,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Overlay HTML Content */}
            <div className="relative z-10 text-center p-6">
                <motion.div
                    custom={0}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6 backdrop-blur-sm"
                >
                    <Zap className="h-4 w-4 text-gold-400" />
                    <span className="text-sm font-medium text-gray-200">
                        Soluciones de IA Personalizadas
                    </span>
                </motion.div>

                <motion.h1
                    custom={1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl md:text-8xl font-bold font-display tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                >
                    Más control.<br />
                    Menos fricción.<br />
                    <span className="text-gradient-gold">Todo automatizado.</span>
                </motion.h1>

                <motion.p
                    custom={2}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl mx-auto text-lg text-gray-400 mb-10"
                >
                    Creamos e implementamos soluciones de IA que atraen clientes, reducen costos y aumentan los ingresos en <span className="text-gold-300 font-medium">semanas, no en meses.</span>
                </motion.p>

                <motion.div
                    custom={3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <InteractiveHoverButton
                        onClick={openModal}
                        className="text-lg"
                    >
                        Agenda una consulta
                    </InteractiveHoverButton>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-gold-300 rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
};

export default AetherFlowHero;
