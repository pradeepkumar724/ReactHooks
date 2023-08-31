import "./App.css";
import CounterMemo from "./components/CounterMemo";
import DataFetchingOne from "./components/DataFetchingOne";
import HookTimer from "./components/HookTimer";
import InputFocus from "./components/InputFocus";
import ParentComponent from "./components/ParentComponent";
// import React, { useContext, useReducer } from "react";
// import ComponentA from "./ComponentA";
// import ClassClickCounter from "./components/ClassClickCounter";
// import ClassMouse from "./components/ClassMouse";
// import ComponentDidCounter from "./components/ComponentDidCounter";
// import DataFetching from "./components/DataFetching";
// import EffectCounterOne from "./components/EffectCounterOne";
// import HookCounter from "./components/HookCounter";
// import HookCounterFour from "./components/HookCounterFour";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterTwo from "./components/HookCounterTwo";
// import HookMouse from "./components/HookMouse";
// import IntervalClassCounter from "./components/IntervalClassCounter";
// import IntervalHookCounter from "./components/IntervalHookCounter";
// import MouseContainer from "./components/MouseContainer";
// import ReducerCountOne from "./components/ReducerCountOne";
// import ReducerCountTwo from "./components/ReducerCountTwo";
// import ReducerCountThree from "./components/ReducerCountThree";
// import CounterA from "./components/CounterA";
// import CounterB from "./components/CounterB";
// import CounterC from "./components/CounterC";

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <ClassClickCounter /> */}
      {/* <ComponentDidCounter /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <EffectCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserValue.Provider value={"Viswas"}>
        <UserChannel.Provider value={"codevalution"}>
          <ComponentA />
        </UserChannel.Provider>
      </UserValue.Provider> */}
      {/* <ReducerCountOne /> */}
      {/* <ReducerCountTwo /> */}
      {/* <ReducerCountThree /> */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h1>{count}</h1>
        <CounterA />
        <CounterB />
        <CounterC />
      </CountContext.Provider> */}
      {/* <DataFetchingOne /> */}
      {/* <ParentComponent /> */}
      {/* <CounterMemo /> */}
      {/* <InputFocus /> */}
      <HookTimer />
    </div>
  );
}

export default App;
