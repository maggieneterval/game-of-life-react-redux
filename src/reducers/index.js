import { TOGGLE_CELL, STEP, SET_RANDOM_BOARD, CLEAR_BOARD, START_AUTOPLAY, STOP_AUTOPLAY } from '../actions/action-constants';
import { combineReducers } from 'redux';
import { generateBoard, toggleSingle, step } from '../utilities';
import _ from 'lodash';

const length = 25;
const width = 25;
const initialBoard = generateBoard(length, width);

const board = (state=initialBoard, action) => {
  const nextBoard = _.cloneDeep(state);
  switch (action.type) {
    case TOGGLE_CELL:
      return toggleSingle(nextBoard, action.x, action.y);
    case SET_RANDOM_BOARD:
      return generateBoard(length, width, true);
    case STEP:
      return step(state);
    case CLEAR_BOARD:
      return generateBoard(length, width);
    default:
      return state;
  }
};

const isAutoPlaying = (state=false, action) => {
  switch (action.type) {
    case START_AUTOPLAY:
      return true;
    case STOP_AUTOPLAY:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  board,
  isAutoPlaying
});

export default rootReducer;
