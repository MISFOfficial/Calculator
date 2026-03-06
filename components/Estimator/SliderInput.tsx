"use client";

import React from "react";

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  unitLabel?: string;
}

export const SliderInput: React.FC<SliderInputProps> = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  unitLabel,
}) => {
  const ticks = [];
  for (let i = min; i <= max; i += step) {
    ticks.push(i);
  }

  return (
    <div className="w-full mb-8">
      <label className="block text-muted-blue text-sm font-medium mb-4">
        {label}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mb-4"
      />
      <div className="flex justify-between px-1">
        {ticks.map((tick) => (
          <div key={tick} className="flex flex-col items-center">
            <div className="h-2 w-0.5 bg-gray-200 mb-1" />
            <span className="text-[10px] text-gray-400 font-medium">
              {tick}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
