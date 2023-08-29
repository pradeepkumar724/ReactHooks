import React from "react";
import { useContext } from "react";
import { CountContext } from "../App";

function CounterF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Count - {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterF;
