"use client";

import React from "react";
import { Feature } from "@/constants/features";

interface QuoteSummaryProps {
  selectedFeatures: Feature[];
}

export const QuoteSummary: React.FC<QuoteSummaryProps> = ({
  selectedFeatures,
}) => {
  const minTotal = selectedFeatures.reduce((acc, f) => acc + f.defaultValue, 0);
  const maxTotal = selectedFeatures.reduce((acc, f) => acc + f.defaultValue, 0);

  if (selectedFeatures.length === 0) return null;

  return (
    <div className="glass-card p-8 border-[var(--color-accent)] animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-zinc-400 font-medium mb-1">
            Estimated Project Budget
          </h2>
          <div className="flex items-baseline gap-3 justify-center md:justify-start">
            <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              ${minTotal.toLocaleString()}
            </span>
            <span className="text-2xl text-zinc-500 font-bold">to</span>
            <span className="text-4xl md:text-6xl font-black text-accent-light tracking-tighter">
              ${maxTotal.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col gap-4">
          <button className="bg-accent hover:bg-accent-light text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20">
            Get Started Now
          </button>
          <p className="text-center text-xs text-zinc-500 italic">
            * This is an automated estimate for discussion purposes.
          </p>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-white/5">
        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
          Included Features
        </h3>
        <div className="flex flex-wrap gap-2">
          {selectedFeatures.map((f) => (
            <span
              key={f.id}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300 font-medium"
            >
              {f.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
