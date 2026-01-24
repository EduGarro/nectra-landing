import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Send } from "lucide-react";

function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

function ActionSearchBar({ onSubmit, placeholder = "¿Cómo podemos ayudarte?" }) {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSubmit(query);
            setQuery("");
        }
    };

    const container = {
        hidden: { opacity: 0, height: 0 },
        show: {
            opacity: 1,
            height: "auto",
            transition: {
                height: {
                    duration: 0.4,
                },
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                height: {
                    duration: 0.3,
                },
                opacity: {
                    duration: 0.2,
                },
            },
        },
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="relative flex flex-col justify-start items-center">
                <div className="w-full max-w-sm">
                    <label
                        className="text-xs font-medium text-gray-400 mb-2 block"
                        htmlFor="search"
                    >
                        {placeholder}
                    </label>
                    <form onSubmit={handleSubmit} className="relative">
                        <input
                            type="text"
                            placeholder="Escribe tu consulta aquí..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                            className="w-full pl-4 pr-12 py-3 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/50 transition-all backdrop-blur-xl"
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gold-400/10 transition-colors"
                        >
                            <AnimatePresence mode="popLayout">
                                {query.length > 0 ? (
                                    <motion.div
                                        key="send"
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Send className="w-4 h-4 text-gold-300" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="search"
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Search className="w-4 h-4 text-gray-400" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </form>
                </div>

                {/* Helper text */}
                <div className="w-full max-w-sm mt-3">
                    <AnimatePresence>
                        {isFocused && (
                            <motion.div
                                className="flex items-center justify-between text-xs text-gray-500 px-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <span>Presiona Enter para enviar</span>
                                <span>ESC para cancelar</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export { ActionSearchBar };
