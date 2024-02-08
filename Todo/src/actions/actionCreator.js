import { ACTION } from './actionType';

export const createAction = (type, payload) => ({
  type,
  payload,
});

export const increment = (value) =>
  createAction(ACTION.INCREMENT_COUNTER_ACTION, +value);
export const decrement = (value) =>
  createAction(ACTION.DECREMENT_COUNTER_ACTION, +value);
export const setStep = (newStep) =>
  createAction(ACTION.STEP_COUNTER_ACTION, newStep);
export const setCoords = (newCoords) =>
  createAction(ACTION.COORDS_ACTION, newCoords);
