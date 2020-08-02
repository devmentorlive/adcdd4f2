import React from "react";
import useSound from "use-sound";
import popinout from "../popinout.wav";

export default function Checkbox({ value = false, onChange, label }) {
  const [play] = useSound(popinout, {
    sprite: {
      in: [500, 1000],
      out: [1500, 2000],
    },
  });
  return (
    <div className="checkbox">
      <div
        className="border"
        onClick={() => {
          play({ id: value ? "in" : "out" });
          return onChange(!value);
        }}
      >
        <div className={`indicator ${value ? "checked" : "unchecked"}`} />
      </div>
      <span className="label">{label}</span>
    </div>
  );
}