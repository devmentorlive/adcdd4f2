import React, { useState } from "react";
import Checkbox from "./checkbox";

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(val) => setChecked(val)}
      label={"Count me in!"}
    />
  );
}
