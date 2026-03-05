"use client";

import React, { useState, useMemo } from "react";
import { CALC_DEFAULTS } from "@/constants/features";
import { EstimatorHeader } from "./EstimatorHeader";
import { IncomeSection } from "./IncomeSection";
import { CostSection } from "./CostSection";

export const Estimator: React.FC = () => {
  const [units, setUnits] = useState(CALC_DEFAULTS.units);
  const [monthlyRent, setMonthlyRent] = useState(
    CALC_DEFAULTS.monthlyRent.toString(),
  );
  const [occupancyRate, setOccupancyRate] = useState(
    CALC_DEFAULTS.occupancyRate,
  );
  const [operationalCosts, setOperationalCosts] = useState(
    CALC_DEFAULTS.operationalCosts.toString(),
  );
  const [mortgages, setMortgages] = useState(
    CALC_DEFAULTS.mortgages.toString(),
  );

  const grossRevenue = useMemo(() => {
    const rent = parseFloat(monthlyRent) || 0;
    return units * rent * (occupancyRate / 100);
  }, [units, monthlyRent, occupancyRate]);

  const monthlyCost = useMemo(() => {
    const op = parseFloat(operationalCosts) || 0;
    const mort = parseFloat(mortgages) || 0;
    return op + mort;
  }, [operationalCosts, mortgages]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <EstimatorHeader />

      <IncomeSection
        units={units}
        monthlyRent={Number(monthlyRent)}
        occupancyRate={occupancyRate}
        onUnitsChange={setUnits}
        onRentChange={setMonthlyRent}
        onOccupancyChange={setOccupancyRate}
        grossRevenue={grossRevenue}
      />

      <CostSection
        operationalCosts={Number(operationalCosts)}
        mortgages={Number(mortgages)}
        onOperationalChange={setOperationalCosts}
        onMortgagesChange={setMortgages}
        monthlyCost={monthlyCost}
      />

      <div className="mt-12 text-center pb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 max-w-2xl mx-auto leading-tight">
          Go to the next step to get your breakdown
        </h2>
        <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xl font-bold py-4 px-12 rounded-lg transition-all shadow-md active:scale-[0.98]">
          Next
        </button>
      </div>
    </div>
  );
};
