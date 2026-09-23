import { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = (event) => {
    const clickedValue = event.target.textContent;

    if ("0123456789".includes(clickedValue)) {
      setValue((previousValue) => previousValue + clickedValue);
    }

    if (["+", "×", "−", "÷"].includes(clickedValue)) {
      setValue((previousValue) => previousValue + clickedValue);
    }

    if (clickedValue === "C") {
      setValue("");
    }
  };

  return (
    <div className="container">
      <div className="input-box">
        {value}
      </div>

      <div
        className="buttons-container"
        onClick={handleButtonClick}
      >
        <p className="row-1">
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button">÷</button>
        </p>

        <p className="row-2">
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button">×</button>
        </p>

        <p className="row-3">
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button">−</button>
        </p>

        <p className="row-4">
          <button className="button">0</button>
          <button className="button">C</button>
          <button className="button">+</button>
          <button className="button">=</button>
        </p>
      </div>
    </div>
  );
}

export default App;