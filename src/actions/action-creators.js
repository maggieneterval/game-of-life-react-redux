import { TOGGLE_CELL } from './action-constants';

export const createToggleAction = (x, y) => ({
  type: TOGGLE_CELL,
  x,
  y
});
