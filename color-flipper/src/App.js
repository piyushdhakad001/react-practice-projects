import { useEffect, useState } from "react";
import "./App.css";


function App(){
  const [color, setColor] = useState("rgb(128, 128, 128)")

  useEffect(() => {
    const savedColor = localStorage.getItem("bgColor");
    if(savedColor){
      setColor(savedColor);
    }
  })
  
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor)
    localStorage.setItem("bgColor", newColor)
  }

  return (
    <div className="container" style={{background: color}}>
      <p className="colortext" >Background-color: {color} </p>
      <button className="click-button" onClick={handleClick}>Click me</button>
    </div>
  )
}
export default App;
