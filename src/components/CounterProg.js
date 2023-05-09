import React, { useState } from "react";

function CounterProg() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <h5>Counter App</h5>
      <h1 className="text">{counter}</h1>
      <div className="d-flex justify-content-evenly">
        <button className="btn btn-danger" onClick={decrement}>
          Decrement
        </button>
        <button className="btn  btn-warning" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
      </div>
    </>
  );
}

export default CounterProg;
