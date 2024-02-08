import React from 'react';
import { useCounter } from '../../hooks/reducer';
import styles from './Counter.module.scss';

const Counter = () => {
  const { state, increment, decrement, setStep } = useCounter({
    initialCounter: 0,
    initialStep: 1,
  });

  const handleIncrement = () => {
    increment(state.step);
  };

  const handleDecrement = () => {
    decrement(state.step);
  };

  const handleStepChange = ({ target: { value } }) => {
    const newStep = +value;
    setStep(newStep);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2>Click count: {state.counter}</h2>
        <button className={styles.counterBtn} onClick={handleIncrement}>
          +
        </button>
        <button className={styles.counterBtn} onClick={handleDecrement}>
          -
        </button>
        <label>
          set step:
          <select value={state.step} onChange={handleStepChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='5'>5</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default Counter;
