import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h2>value: {counter}</h2>
      <button onClick={onIncrement}>increment</button>
    </div>
  );
};

export default Counter;
