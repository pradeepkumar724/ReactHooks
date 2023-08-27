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
function ReducerCountOne() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increase")}>Increase</button>
      <button onClick={() => dispatch("decrease")}>Decrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default ReducerCountOne;
