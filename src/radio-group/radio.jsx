import React from "react";
import useSound from "use-sound";
import popinout from "../sounds/popinout.wav";

export default function Radio({ value, option, onChange }) {
  const [play] = useSound(popinout, {
    sprite: {
      in: [500, 1000],
    },
  });
  return (
    <div className="radio">
      <div
        className="border"
        onClick={() => {
          play({ id: option ? "in" : "out" });
          return onChange(option);
        }}
      >
        <div
          className={`indicator ${value === option ? "checked" : "unchecked"}`}
        />
      </div>
      <span className="label">{option}</span>
    </div>
  );
}
