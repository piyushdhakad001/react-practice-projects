import { useState, useEffect } from "react";
import "./App.css";


function App(){
  const [color, setColor] = useState("rgb(128, 128, 128)")

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},)`
  }

  return (
    <div className="container" style={{background: color}}>
      <p className="colortext" >Background-color: {color} </p>
      <button className="click-button">Click me</button>
    </div>
  )
}
export default App;
