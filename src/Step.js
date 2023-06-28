import { useState } from "react";

export default function Step({ onGetStep }) {
  const [count, setCount] = useState(1);

  const addCount = function () {
    setCount((prev) => prev + 1);

    onGetStep(count);
  };

  const subCount = function () {
    setCount((prev) => prev - 1);
    onGetStep(count);
  };

  return (
    <>
      <button onClick={subCount}>-</button>
      <span>Step: {count}</span>
      <button onClick={addCount}>+</button>
    </>
  );
}
