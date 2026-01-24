"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export function TubelightNavbar({ items, className, openModal }) {
    const [activeTab, setActiveTab] = useState(items[0]?.name || '')
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Scroll spy effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = items.map(item => document.querySelector(item.url))
            const scrollPosition = window.scrollY + 100

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveTab(items[i].name)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [items])

    const scrollToSection = (url) => {
        const element = document.querySelector(url)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div
            className={cn(
                "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-4",
                className,
            )}
        >
            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-xl border border-white/10 py-2 px-2 rounded-full shadow-2xl">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 pl-2 pr-4">
                    <img
                        src="/Logo Nectra.jpeg"
                        alt="Nectra"
                        className="w-8 h-8 rounded-lg object-cover"
                    />
                    <span className="text-sm font-display font-bold text-gradient-gold hidden sm:block">
                        NECTRA
                    </span>
                </a>

                {/* Nav Items */}
                {items.map((item) => {
                    const isActive = activeTab === item.name

                    return (
                        <button
                            key={item.name}
                            onClick={() => {
                                setActiveTab(item.name)
                                scrollToSection(item.url)
                            }}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                                "text-gray-300 hover:text-gold-300",
                                isActive && "text-gold-300",
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                {item.icon && <item.icon size={18} strokeWidth={2.5} />}
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-gold-500/10 rounded-full -z-10 border border-gold-400/20"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    {/* Tubelight glow effect */}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold-400 rounded-t-full">
                                        <div className="absolute w-12 h-6 bg-gold-400/20 rounded-full blur-md -top-2 -left-2" />
                                        <div className="absolute w-8 h-6 bg-gold-400/20 rounded-full blur-md -top-1" />
                                        <div className="absolute w-4 h-4 bg-gold-400/20 rounded-full blur-sm top-0 left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </button>
                    )
                })}

                {/* CTA Button */}
                <button
                    onClick={openModal}
                    className="btn-gold px-5 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 ml-2"
                >
                    Empecemos
                    <ArrowRight size={14} />
                </button>
            </div>
        </div>
    )
}
