"use client";

import React from "react";
import { Feature } from "@/constants/features";
import { Check } from "lucide-react";

interface FeatureCardProps {
  feature: Feature;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  isSelected,
  onToggle,
}) => {
  // const Icon = feature.icon;

  return (
    <div
      onClick={() => onToggle(feature.id)}
      className={`glass-card glass-card-hover cursor-pointer relative p-6 flex flex-col gap-4 group ${isSelected ? "border-[var(--color-accent)] bg-white/5" : ""
        }`}
    >
      <div className="flex justify-between items-start">
        <div
          className={`p-3 rounded-xl transition-colors ${isSelected
            ? "bg-accent text-white"
            : "bg-white/5 text-zinc-400 group-hover:text-white"
            }`}
        >
          {/* <Icon size={24} /> */}
        </div>

        {isSelected && (
          <div className="bg-accent rounded-full p-1 animate-in zoom-in duration-300">
            <Check size={14} className="text-white" />
          </div>
        )}
      </div>

      <div>
        <h3 className="font-semibold text-lg text-white mb-1">
          {feature.title}
        </h3>
        <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className="mt-auto flex items-baseline gap-1">
        <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
          Starts from
        </span>
        <span className="text-accent-light font-bold">${feature.defaultValue}</span>
      </div>

      {isSelected && (
        <div className="absolute inset-0 rounded-2xl ring-2 ring-accent ring-inset pointer-events-none" />
      )}
    </div>
  );
};
