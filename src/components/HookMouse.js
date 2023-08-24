import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mousePosition = (e) => {
    console.log("mouseMove");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("mousemove", mousePosition);

    return () => {
      console.log("Component Unmount");
      window.removeEventListener("mousemove", mousePosition);
    };
  }, []);
  return (
    <div>
      <h1>
        X - {x} Y - {y}
      </h1>
    </div>
  );
}

export default HookMouse;
