import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const InteractiveHoverButton = React.forwardRef(
    ({ text = "Button", className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-full px-8 py-4 text-center font-semibold transition-all duration-300",
                    "bg-gradient-to-r from-gold-400 to-gold-500 text-dark-900",
                    "hover:shadow-lg hover:shadow-gold-400/50 hover:scale-105",
                    "border border-gold-300/30",
                    className,
                )}
                {...props}
            >
                <span className="relative z-10 inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                    {children || text}
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
        );
    }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
