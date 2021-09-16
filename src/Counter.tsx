import { observer } from "mobx-react-lite";
import React from "react";
import counter from "./store/counter";

const Counter = observer(() => {
  return (
    <div>
        <p>{counter.total}</p>
      <button
        onClick={() => {
          counter.increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counter.decrement();
        }}
      >
        -
      </button>
      <br />
      <span>{counter.state.count}</span>
    </div>
  );
})

export default Counter;
