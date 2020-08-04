import React from "react";
import useSound from "use-sound";
import sounds from "./sounds.wav";
import "./styles.css";

export default function Checkbox({ checked, onChange, label }) {
  const [play] = useSound(sounds, {
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
          play({ id: checked ? "in" : "out" });
          onChange(!checked);
        }}
      >
        <div className={`indicator ${checked ? "checked" : ""}`} />
      </div>
      <div className="label">{label}</div>
    </div>
  );
}
