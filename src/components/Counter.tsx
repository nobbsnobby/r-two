import React, { useState } from "react";
import SpinnerCounterStore from "@components/SpinnerCounterStore";
import styles from "../features/counter/Counter.module.css";
import useStore from "../store/store";

function Counter() {
  const counterValue = useStore((state) => state.value);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.increment);
  const incrementByAmount = useStore((state) => state.incrementByAmount);

  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decrement}
        >
          -
        </button>
        <span className={styles.value}>{counterValue}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={() => {}}>
          Add Async
        </button>
        <button className={styles.button} onClick={() => {}}>
          Add If Odd
        </button>
      </div>
      <SpinnerCounterStore />
    </div>
  );
}

export default Counter;
