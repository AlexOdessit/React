import { useState } from 'react';

export const useClicker = (initialCount, initialStep) => {
  const [click, setClick] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const handleClick = () => {
    setClick((prevClick) => prevClick + step);
  };

  const handleStepChange = ({ target: { value: newStep } }) => {
    setStep(+newStep);
  };
  return { click, step, handleClick, handleStepChange };
};
