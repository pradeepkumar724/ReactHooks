import React, { useState } from "react";

function CounterMemo() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const clickOne = () => {
    setCountOne(countOne + 1);
  };
  const clickTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = () => {
    return countOne % 2 === 0;
  };
  return (
    <div>
      <button onClick={() => clickOne()}>IncrementOne - {countOne}</button>
      <span>{isEven() ? "Even" : "Odd"}</span>
      <div>
        <button onClick={() => clickTwo()}>IncrementTwo - {countTwo}</button>
      </div>
    </div>
  );
}

export default CounterMemo;
