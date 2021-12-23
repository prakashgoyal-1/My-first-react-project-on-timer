
import React from "react";
import './App.css'

const App = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display">
        <span>{( Math.floor((time / 3600000) % 60)) }:</span>
        <span>{(Math.floor((time / 60000) % 60))}:</span>
        <span>{(Math.floor((time / 1000) % 60))}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};

export default App;





// import { useState } from "react";


// const Counter = () => {

//   const [count, setCount] = useState(0);
//   let temp = 0;
//   function counterStart (e)  {
//     //   e.preventDefault();
//     temp = setInterval(() => {
//         temp++;
//         console.log("setInterval run");
//         setCount(count+1);
//         console.log("onclick function run : "+temp +"  times");
//         if(temp === 10){
//             clearInterval(temp);
//         }   
//     },1000);
// console.log("outer the setInterval");
    
  
  
// //     const temp = setInterval(setCount(count+1),1500);
// // console.log("temp is :  "+temp);
// //     if(count === 10){
// //         clearInterval(temp);
// //     }
//   }
  
//     return(
//         <>
//         <div>this is counter app</div>
//         <div>count is :  {count}</div>
//         <button onClick={counterStart}>click start counter</button>

        
//         </>
//     )
// }

// export default Counter;