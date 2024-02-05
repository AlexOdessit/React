import React from 'react';
import { useClicker } from '../../hooks/clicker';

const ClickerComponent = () => {
  const { click, step, handleClick, handleStepChange } = useClicker(0, 1);

  return (
    <div>
      <p>Click count: {click}</p>
      <button onClick={handleClick}>Click me</button>
      <label>
        set step:
        <select value={step} onChange={handleStepChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='5'>5</option>
        </select>
      </label>
    </div>
  );
};

export default ClickerComponent;
