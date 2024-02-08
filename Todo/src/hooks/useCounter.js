import { useReducer } from 'react';
import { increment,decrement,setStep,setCoords } from '../actions/actionCreator';

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

const dataAction = [increment,decrement,setStep,setCoords];

export const useCounter = ({ initialCounter, initialStep, initialCoords }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    counter: initialCounter || initialState.counter,
    step: initialStep || initialState.step,
    coords: initialCoords || initialState.coords,

  });

  

  return {
    state,
    increment,
    decrement,
    setStep,
    setCoords,
  };
};
