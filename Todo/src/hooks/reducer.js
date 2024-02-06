import { useReducer } from 'react';

const initialState = {
  counter: 0,
  coords: {
    x: 0,
    y: 0,
  },
  step: 1,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'increment':
      return { ...state, counter: state.counter + payload };
    case 'decrement':
      return { ...state, counter: state.counter - payload };

    case 'setStep':
      return { ...state, step: payload };

    case 'setCoords':
      return { ...state, coords: payload };

    default:
      return state;
  }
};

export const useCounter = ({ initialCounter, initialStep, initialCoords }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    counter: initialCounter || initialState.counter,
    step: initialStep || initialState.step,
    coords: initialCoords || initialState.coords,
  });

  const increment = (value) => {
    dispatch({ type: 'increment', payload: value });
  };

  const decrement = (value) => {
    dispatch({ type: 'decrement', payload: value });
  };

  const setStep = (newStep) => {
    dispatch({ type: 'setStep', payload: newStep });
  };

  const setCoords = (newCoords) => {
    dispatch({ type: 'setCoords', payload: newCoords });
  };

  return {
    state,
    increment,
    decrement,
    setStep,
    setCoords,
  };
};
