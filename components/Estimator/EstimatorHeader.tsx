"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const EstimatorHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center gap-4 mb-12">
      <div className="flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent-light text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-top-4 duration-700">
        <Sparkles size={14} />
        <span>Budget Estimator</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
        Build Your Vision. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-blue-400">
          Estimate the Cost.
        </span>
      </h1>

      <p className="max-w-xl text-zinc-400 text-lg leading-relaxed animate-in fade-in slide-in-from-top-8 duration-700 delay-200">
        Select the features you need for project, and we'll calculate a premium
        estimate in real-time. Transparent pricing for exceptional quality.
      </p>
    </div>
  );
};
