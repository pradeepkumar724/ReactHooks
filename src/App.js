import "./App.css";
import React, { useContext } from "react";
import ComponentA from "./ComponentA";
import ClassClickCounter from "./components/ClassClickCounter";
import ClassMouse from "./components/ClassMouse";
import ComponentDidCounter from "./components/ComponentDidCounter";
import DataFetching from "./components/DataFetching";
import EffectCounterOne from "./components/EffectCounterOne";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";

export const UserValue = React.createContext();
export const UserChannel = React.createContext();

function App() {
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
      <UserValue.Provider value={"Viswas"}>
        <UserChannel.Provider value={"codevalution"}>
          <ComponentA />
        </UserChannel.Provider>
      </UserValue.Provider>
    </div>
  );
}

export default App;
