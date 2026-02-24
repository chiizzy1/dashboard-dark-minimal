"use client";

import { motion, type Variants } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";

const shimmerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const shimmerItem: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(5px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Loading() {
  return (
    <>
      <AppSidebar />
      <main className="flex-1 flex flex-col min-w-0 relative">
        <Header globalFilter="" setGlobalFilter={() => {}} activeTab="7d" setActiveTab={() => {}} />
        <div className="flex-1 overflow-y-auto w-full">
          <motion.div
            variants={shimmerContainer}
            initial="hidden"
            animate="show"
            className="w-full max-w-[1600px] mx-auto p-8 space-y-6"
          >
            {/* KPI Row Skeletons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <motion.div key={i} variants={shimmerItem}>
                  {/* Using custom dark styles for the skeleton to match the dark bento boxes */}
                  <Skeleton className="h-32 w-full rounded-xl bg-card-dark border border-border-dark opacity-50" />
                </motion.div>
              ))}
            </div>

            {/* Middle Row Skeletons */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div variants={shimmerItem} className="col-span-1 lg:col-span-2">
                <Skeleton className="h-[350px] w-full rounded-xl bg-card-dark border border-border-dark opacity-50" />
              </motion.div>
              <motion.div variants={shimmerItem} className="col-span-1">
                <Skeleton className="h-[350px] w-full rounded-xl bg-card-dark border border-border-dark opacity-50" />
              </motion.div>
            </div>

            {/* Bottom Row Skeletons */}
            <motion.div variants={shimmerItem}>
              <Skeleton className="h-[400px] w-full rounded-xl bg-card-dark border border-border-dark opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
