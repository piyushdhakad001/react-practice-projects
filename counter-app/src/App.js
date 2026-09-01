import { useEffect, useState } from "react";  
import "./App.css"


function App(){
   const [count, setCount] = useState(1000);

   const increase = () => {
    setCount(count + 1);
   }
   const decrease = () => {
    if(count > 1000){
    setCount(count - 1);
    }
   }
   const reset = () => {
    setCount(1000);
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