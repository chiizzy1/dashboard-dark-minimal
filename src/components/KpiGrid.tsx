import React from "react";

export function KpiGrid({ data }: { data: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* KPI Card 1: Total MRR */}
      <div className="bg-card-dark border border-border-dark rounded-xl p-6 relative group hover:border-primary/50 hover:-translate-y-0.5 shadow-sm hover:shadow-primary/5 transition-all duration-200 ease-out">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-muted text-sm font-medium">Total MRR</h3>
          <span className="material-symbols-outlined text-muted/50 group-hover:text-primary transition-colors">attach_money</span>
        </div>
        <div className="flex items-end gap-3 mb-1">
          <span className="text-3xl font-bold text-white tracking-tight">{data.mrr.value}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center text-primary text-xs font-medium bg-primary/10 px-1.5 py-0.5 rounded">
            <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span>
            {data.mrr.trend}%
          </span>
          <span className="text-muted text-xs">{data.mrr.subtitle}</span>
        </div>
      </div>

      {/* KPI Card 2: Active Subscribers */}
      <div className="bg-card-dark border border-border-dark rounded-xl p-6 relative group hover:border-primary/50 hover:-translate-y-0.5 shadow-sm hover:shadow-primary/5 transition-all duration-200 ease-out">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-muted text-sm font-medium">Active Subscribers</h3>
          <span className="material-symbols-outlined text-muted/50 group-hover:text-primary transition-colors">people</span>
        </div>
        <div className="flex items-end gap-3 mb-1">
          <span className="text-3xl font-bold text-white tracking-tight">{data.subscribers.value}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center text-primary text-xs font-medium bg-primary/10 px-1.5 py-0.5 rounded">
            <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span>
            {data.subscribers.trend}%
          </span>
          <span className="text-muted text-xs">{data.subscribers.subtitle}</span>
        </div>
        {/* Sparkline placeholder */}
        <div className="absolute bottom-6 right-6 w-16 h-8 opacity-50">
          <svg className="w-full h-full stroke-primary fill-none stroke-2" viewBox="0 0 100 50">
            <path d="M0 40 Q 25 45 50 25 T 100 10"></path>
          </svg>
        </div>
      </div>

      {/* KPI Card 3: Churn Rate */}
      <div className="bg-card-dark border border-border-dark rounded-xl p-6 relative group hover:border-primary/50 hover:-translate-y-0.5 shadow-sm hover:shadow-primary/5 transition-all duration-200 ease-out">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-muted text-sm font-medium">Churn Rate</h3>
          <span className="material-symbols-outlined text-muted/50 group-hover:text-primary transition-colors">
            trending_down
          </span>
        </div>
        <div className="flex items-end gap-3 mb-1">
          <span className="text-3xl font-bold text-white tracking-tight">{data.churn.value}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`flex items-center ${data.churn.status === "positive" ? "text-primary bg-primary/10" : "text-red-500 bg-red-500/10"} text-xs font-medium px-1.5 py-0.5 rounded`}
          >
            <span className="material-symbols-outlined text-sm mr-0.5">
              {data.churn.status === "positive" ? "arrow_downward" : "arrow_upward"}
            </span>
            {data.churn.trend}%
          </span>
          <span className="text-muted text-xs">{data.churn.subtitle}</span>
        </div>
      </div>

      {/* KPI Card 4: Net New Revenue */}
      <div className="bg-card-dark border border-border-dark rounded-xl p-6 relative group hover:border-primary/50 hover:-translate-y-0.5 shadow-sm hover:shadow-primary/5 transition-all duration-200 ease-out">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-muted text-sm font-medium">Net New Revenue</h3>
          <span className="material-symbols-outlined text-muted/50 group-hover:text-primary transition-colors">savings</span>
        </div>
        <div className="flex items-end gap-3 mb-4">
          <span className="text-3xl font-bold text-white tracking-tight">{data.netNew.value}</span>
        </div>
        <div className="w-full">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted">Target</span>
            <span className="text-white font-medium">{data.netNew.target}</span>
          </div>
          <div className="h-1.5 w-full bg-border-dark rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[75%] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
