"use client";

import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { KpiGrid } from "@/components/KpiGrid";
import { RevenueChart } from "@/components/RevenueChart";
import { RegionalPerformance } from "@/components/RegionalPerformance";
import { TransactionsTable } from "@/components/TransactionsTable";
import { DASHBOARD_DATA } from "@/data/mockData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      duration: 0.45,
      bounce: 0,
    },
  },
};

export default function Home() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [activeTab, setActiveTab] = useState<"7d" | "30d" | "YTD">("30d");

  const currentData = DASHBOARD_DATA[activeTab];

  return (
    <>
      <AppSidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-7xl mx-auto space-y-6">
            <motion.div variants={itemVariants}>
              <KpiGrid data={currentData.kpis} />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2">
                <RevenueChart data={currentData.chart} />
              </motion.div>
              <motion.div variants={itemVariants} className="col-span-1">
                <RegionalPerformance data={currentData.regions} />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <TransactionsTable globalFilter={globalFilter} data={currentData.transactions} />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
