import React, { useState } from "react";
import "./styles.css";

import Checkbox from "./checkbox";
import RadioGroup from "./radio-group";

const radioOptions = ["Mac", "Linux", "Windows"];

function App() {
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(radioOptions[0]);

  return (
    <>
      <Checkbox
        value={checked}
        onChange={(val) => setChecked(val)}
        label="Count me in!"
      />

      <RadioGroup
        value={selectedOption}
        options={radioOptions}
        onChange={(val) => setSelectedOption(val)}
      />
    </>
  );
}

export default App;
