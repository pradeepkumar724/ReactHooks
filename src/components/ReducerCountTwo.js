import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "incrementSecoundCounter":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrementSecoundCounter":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function ReducerCountTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count {count.firstCount}</h1>
      <h1>Count {count.secondCount}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement5
      </button>
      <div>
        <button
          onClick={() =>
            dispatch({ type: "incrementSecoundCounter", value: 1 })
          }
        >
          incrementSecoundCounter
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrementSecoundCounter", value: 1 })
          }
        >
          DecrementSecoundCounter
        </button>
      </div>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReducerCountTwo;
