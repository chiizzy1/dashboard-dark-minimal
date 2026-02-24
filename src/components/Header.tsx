import React, { useState } from "react";
import { motion } from "motion/react";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface HeaderProps {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  activeTab: "7d" | "30d" | "YTD";
  setActiveTab: (value: "7d" | "30d" | "YTD") => void;
}

export function Header({ globalFilter, setGlobalFilter, activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-border-dark bg-background-dark/80 backdrop-blur sticky top-0 z-20 shrink-0">
      {/* Search and Trigger */}
      <div className="flex items-center gap-2 md:gap-4 max-w-md w-full">
        <SidebarTrigger className="-ml-2 md:hidden text-muted hover:text-white" />
        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-muted group-focus-within:text-white transition-colors">search</span>
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2 bg-card-dark border border-border-dark rounded-full text-sm text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
            placeholder="Search (Cmd+K)"
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 pr-3 hidden sm:flex items-center pointer-events-none">
            <kbd className="inline-flex items-center border border-border-dark rounded px-2 text-[10px] font-sans font-medium text-muted">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden sm:flex bg-card-dark rounded-full p-1 border border-border-dark relative">
          {(["7d", "30d", "YTD"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative z-10 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeTab === tab ? "text-white" : "text-muted hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-background-dark shadow-sm border border-border-dark rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        <div className="hidden sm:block h-6 w-px bg-border-dark mx-1"></div>

        <button className="relative p-2 text-muted hover:text-white transition-colors rounded-full hover:bg-card-dark shrink-0">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-background-dark"></span>
        </button>

        <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 active:scale-[0.98] shadow-lg shadow-primary/20 shrink-0">
          <span className="material-symbols-outlined text-lg">add</span>
          <span className="hidden sm:inline">New Project</span>
        </button>
      </div>
    </header>
  );
}
