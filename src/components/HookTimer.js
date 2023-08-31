import React, { useEffect, useState, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  // although useref can hold a reference to a dom node using the refAttribute it can also be used to store any mutable value
  //  the value will persist through the rerenders also not causing any additionaal renders when its value changes
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <h1>Hook timer - {timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        ClearInteval
      </button>
    </div>
  );
}

export default HookTimer;
