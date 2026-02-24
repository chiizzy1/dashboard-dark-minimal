import React from "react";
import { motion } from "motion/react";

export function RevenueChart({ data }: { data: { linePath: string; areaPath: string } }) {
  return (
    <div className="lg:col-span-2 bg-card-dark border border-border-dark rounded-xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Revenue vs Target</h3>
          <p className="text-sm text-muted">Comparison of actual revenue against projected goals.</p>
        </div>
        <button className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors duration-150">
          View Report <span className="material-symbols-outlined text-base">arrow_forward</span>
        </button>
      </div>

      {/* Chart Container */}
      <div className="h-64 w-full relative">
        {/* Y-Axis Lines (Subtle) */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          <div className="w-full h-px bg-border-dark/30"></div>
          <div className="w-full h-px bg-border-dark/30"></div>
          <div className="w-full h-px bg-border-dark/30"></div>
          <div className="w-full h-px bg-border-dark/30"></div>
          <div className="w-full h-px bg-border-dark/30"></div>
        </div>

        {/* The Chart (SVG simulation for Area Chart) */}
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
          <defs>
            <linearGradient id="gradientPrimary" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#10b77f" stopOpacity="0.2"></stop>
              <stop offset="100%" stopColor="#10b77f" stopOpacity="0"></stop>
            </linearGradient>
          </defs>

          {/* Dotted Target Line */}
          <path d="M0 150 C 100 140, 300 120, 800 60" fill="none" stroke="#52525B" strokeDasharray="5,5" strokeWidth="2"></path>

          {/* Main Revenue Area */}
          <motion.path
            d={data.areaPath}
            fill="url(#gradientPrimary)"
            initial={false}
            animate={{ d: data.areaPath }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          />
          <motion.path
            d={data.linePath}
            fill="none"
            stroke="#10b77f"
            strokeLinecap="round"
            strokeWidth="3"
            initial={false}
            animate={{ d: data.linePath }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          />
        </svg>
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between mt-2 text-xs text-muted">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
      </div>
    </div>
  );
}
