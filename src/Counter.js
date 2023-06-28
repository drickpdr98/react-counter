import { useState } from "react";

import Step from "./Step";

export default function Counter() {
  const [count, setCount] = useState(1);

  const getStep = function (num) {
    setCount((prev) => prev + num);
  };

  const someDate = new Date();

  someDate.setDate(someDate.getDate() + count);

  const result = someDate.toDateString();

  const addCount = function () {
    setCount((prev) => prev + 1);
  };

  const subCount = function () {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <button onClick={subCount}>-</button>
      <span>Count: {count}</span>
      <button onClick={addCount}>+</button>
      <Step onGetStep={getStep} />

      <div>
        {count} days from now is {result}
      </div>
    </>
  );
}
