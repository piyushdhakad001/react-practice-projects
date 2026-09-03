import { useEffect, useState } from "react";
import "./App.css"
function App() {

  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }

    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])




  return (
    <>
      <h1 className="digital-clock" >Digital Clock</h1>
      <p className="time">Current Time: {time}</p>
    </>
  )
}
export default App;