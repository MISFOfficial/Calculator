"use client";

import React from "react";
import { TextInput } from "./TextInput";

interface CostSectionProps {
  operationalCosts: number;
  mortgages: number;
  onOperationalChange: (val: string) => void;
  onMortgagesChange: (val: string) => void;
  monthlyCost: number;
}

export const CostSection: React.FC<CostSectionProps> = ({
  operationalCosts,
  mortgages,
  onOperationalChange,
  onMortgagesChange,
  monthlyCost,
}) => {
  return (
    <div className="section-card">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-muted-blue opacity-80 mb-1">
          Cost
        </h2>
        <p className="text-gray-400">Your self storage business costs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
        <TextInput
          label="Operational costs"
          description="What are your average monthly costs associated with your self storage business? Things like electrical, internet, security, taxes etc."
          value={operationalCosts}
          onChange={onOperationalChange}
          placeholder="2000"
        />

        <TextInput
          label="Mortgages, leases and rents"
          description="Do you pay any mortgages, leases or rents on the land or units you are renting out? How much? If you own your land outright, leave empty."
          value={mortgages}
          onChange={onMortgagesChange}
          placeholder="3800"
        />
      </div>

      <div className="summary-row">
        <span className="text-muted-blue font-medium">
          Your monthly cost is:
        </span>
        <span className="text-2xl font-bold text-gray-800">
          {monthlyCost.toLocaleString()} USD
        </span>
      </div>
    </div>
  );
};
