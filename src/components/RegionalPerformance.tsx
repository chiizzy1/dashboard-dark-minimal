import React, { useState } from "react";
import { motion } from "motion/react";
import { exportCsv } from "@/utils/exportCsv";

export function RegionalPerformance({ data }: { data: any[] }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      exportCsv(
        [
          { Region: "North America", Performance: "45%" },
          { Region: "Europe", Performance: "32%" },
          { Region: "Asia Pacific", Performance: "18%" },
        ],
        "regional-performance",
      );
      setIsDownloading(false);
    }, 1200);
  };
  return (
    <div className="bg-card-dark border border-border-dark rounded-xl p-6 flex flex-col gap-4 h-full">
      <h3 className="text-lg font-semibold text-white mb-2">Regional Performance</h3>
      <div className="space-y-4">
        {data.map((region, idx) => (
          <div key={region.id} className="flex items-center gap-4">
            <div
              className={`size-10 rounded-lg bg-${region.color}-500/10 flex items-center justify-center text-${region.color}-500 shrink-0`}
            >
              <span className="material-symbols-outlined">{region.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-white">{region.name}</span>
                <span className="text-sm text-white font-bold">{region.percentage}%</span>
              </div>
              <div className="w-full bg-border-dark rounded-full h-1.5">
                <motion.div
                  key={`${region.id}-${region.percentage}`} // force re-animation when data changes
                  className={`bg-${region.color}-500 h-1.5 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${region.percentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-4 border-t border-border-dark">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full py-2 bg-card-dark border border-border-dark rounded-lg text-sm flex items-center justify-center gap-2 text-muted hover:text-white hover:border-muted transition-all duration-150 active:scale-[0.98] disabled:opacity-50"
        >
          {isDownloading ? (
            <>
              <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
              Downloading...
            </>
          ) : (
            "Download Full Report"
          )}
        </button>
      </div>
    </div>
  );
}
