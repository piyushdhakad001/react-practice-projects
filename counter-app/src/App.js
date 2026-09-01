import { useEffect, useState } from "react";  
import "./App.css"


function App(){
   const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("newCount");
    return savedCount !== null ? parseInt(savedCount, 10) : 1000;
  });

  // Save to localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem("newCount", count);
  }, [count]);



   const increase = () => {
    setCount(count + 1);
    // saveCount();
   }
   const decrease = () => {
    if(count > 1000){
    setCount(count - 1);
    // saveCount();
    }
   }
   const reset = () => {
    setCount(1000);
    // saveCount();
   }

   
   
  return (
    <div className="container">
      <p className="counter">Counter: {count} </p>
      <div className="buttons">
      <button className="increase" onClick={increase}>+</button>
      <button className="decrease" onClick={decrease}>-</button>
      <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
export default App;