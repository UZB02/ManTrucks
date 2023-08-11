import React, { useState } from "react";
import "./usestate.css";

export const Page7 = () => {
  const [count, setCount] = useState("0");
  function incrementCount() {
    setCount(count + 10);
  }
  function decrementCount() {
    setCount(count - 10);
  }
  return (
    <>
      <div className="containerr">
        <div className="top">{count}</div>
        <div className="btn">
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
        </div>
      </div>
    </>
  );
};
