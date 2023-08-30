import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge} count={age}>
        increment age
      </Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary} count={salary}>
        increment salary
      </Button>
    </div>
  );
}

export default ParentComponent;
