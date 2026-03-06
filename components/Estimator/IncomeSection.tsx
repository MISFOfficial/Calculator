"use client";

import React from "react";
import { SliderInput } from "./SliderInput";
import { TextInput } from "./TextInput";
import { CALC_CONFIG } from "@/constants/features";

interface IncomeSectionProps {
  units: number;
  monthlyRent: number;
  occupancyRate: number;
  onUnitsChange: (val: number) => void;
  onRentChange: (val: string) => void;
  onOccupancyChange: (val: number) => void;
  grossRevenue: number;
}

export const IncomeSection: React.FC<IncomeSectionProps> = ({
  units,
  monthlyRent,
  occupancyRate,
  onUnitsChange,
  onRentChange,
  onOccupancyChange,
  grossRevenue,
}) => {
  return (
    <div className="section-card">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-muted-blue opacity-80 mb-1">
          Income
        </h2>
        <p className="text-gray-400">Your self storage business income</p>
      </div>

      <SliderInput
        label="How many units (doors) do you have?"
        value={units}
        min={CALC_CONFIG.units.min}
        max={CALC_CONFIG.units.max}
        step={CALC_CONFIG.units.step}
        onChange={onUnitsChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 mt-4">
        <TextInput
          label="What is your monthly rent per unit?"
          description="If you offer different types of units enter the average rent per month that you charge."
          value={monthlyRent}
          onChange={onRentChange}
          placeholder="140"
        />

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            What is your occupancy rate?
          </h3>
          <p className="text-sm text-muted-blue leading-relaxed mb-4">
            Occupancy rate is the percentage of units that are rented out on
            average. Industry standard is around 85%.
          </p>
          <SliderInput
            label=""
            value={occupancyRate}
            min={CALC_CONFIG.occupancyRate.min}
            max={CALC_CONFIG.occupancyRate.max}
            step={CALC_CONFIG.occupancyRate.step}
            onChange={onOccupancyChange}
          />
        </div>
      </div>

      <div className="summary-row">
        <span className="text-muted-blue font-medium">
          Your monthly gross revenue is:
        </span>
        <span className="text-2xl font-bold text-gray-800">
          {grossRevenue.toLocaleString()} USD
        </span>
      </div>
    </div>
  );
};
