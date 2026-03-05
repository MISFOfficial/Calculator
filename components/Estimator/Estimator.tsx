"use client";

import React, { useState } from "react";
import { FEATURES, Feature } from "@/constants/features";
import { FeatureCard } from "./FeatureCard";
import { QuoteSummary } from "./QuoteSummary";
import { EstimatorHeader } from "./EstimatorHeader";

export const Estimator: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(["base"]);

  const handleToggle = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const selectedFeatures = FEATURES.filter((f) => selectedIds.includes(f.id));

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20 min-h-screen">
      <EstimatorHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            isSelected={selectedIds.includes(feature.id)}
            onToggle={handleToggle}
          />
        ))}
      </div>

      <QuoteSummary selectedFeatures={selectedFeatures} />
    </div>
  );
};
