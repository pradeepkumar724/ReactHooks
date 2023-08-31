import React, { useEffect, useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}

export default InputFocus;
