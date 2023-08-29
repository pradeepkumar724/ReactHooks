import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
function ReducerCountThree() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increase")}>Increase</button>
      <button onClick={() => dispatch("decrease")}>Decrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <h1>{countTwo}</h1>
      <button onClick={() => dispatchTwo("increase")}>Increase</button>
      <button onClick={() => dispatchTwo("decrease")}>Decrease</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
}

export default ReducerCountThree;
