"use client";

import React from "react";

interface TextInputProps {
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  description?: string;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  description,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{label}</h3>
      {description && (
        <p className="text-sm text-muted-blue leading-relaxed mb-4">
          {description}
        </p>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};
