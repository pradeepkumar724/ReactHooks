import React, { useState } from "react";
import HookMouse from "./HookMouse";

// In the useEffect :
// manam oka function ni argument ga pampistam aa function execute avutundhi every render of the component updete chesthundhi component ni

function MouseContainer() {
  const [state, setState] = useState(true);
  return (
    <div>
      {state && <HookMouse />}
      <button onClick={() => setState(!state)}>Component Unmount</button>
    </div>
  );
}

export default MouseContainer;
