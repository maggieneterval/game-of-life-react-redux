import { TOGGLE_CELL, STEP, SET_RANDOM_BOARD, CLEAR_BOARD, START_AUTOPLAY, STOP_AUTOPLAY } from './action-constants';

window.stepInterval = null;

export const createToggleAction = (x, y) => ({
  type: TOGGLE_CELL,
  x,
  y
});

export const createSetRandomBoardAction = () => ({
  type: SET_RANDOM_BOARD
});

export const createStepAction = () => ({
  type: STEP
});

export const createStopAutoplayAction = () => ({
  type: STOP_AUTOPLAY
});

export const createStopAutoplayActionAsync = () => {
  clearInterval(window.stepInterval);
  window.stepInterval = null;
  return (dispatch) => {
    dispatch(createStopAutoplayAction());
  };
};

export const createStartAutoplayAction = () => ({
  type: START_AUTOPLAY
});

export const createStartAutoplayActionAsync = () => {
  return (dispatch) => {
    window.stepInterval = setInterval(function () {
      dispatch(createStepAction());
    }, 1000);
    dispatch(createStartAutoplayAction());
  };
};

export const createClearBoardAction = () => ({
  type: CLEAR_BOARD
});
