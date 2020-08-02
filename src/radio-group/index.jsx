import React from "react";
import Radio from "./radio";

export default function RadioGroup({ value = false, onChange, options }) {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <Radio key={option} value={value} option={option} onChange={onChange} />
      ))}
    </div>
  );
}
