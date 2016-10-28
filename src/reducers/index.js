import { TOGGLE_CELL } from '../actions/action-constants';

function generateBoard (length, width) {
  const matrix = [];
  for (let i = 0; i < length; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push('dead');
    }
    matrix.push(row);
  }
  return matrix;
}

const initialState = {
  board: generateBoard(10, 10)
};

export default (state=initialState, action) => {

  //initialize new board to avoid mutation
  const newBoard = state.board;

  //for toggling individual cells:
  let prevStatus;
  let newStatus;

  switch (action.type) {
    case TOGGLE_CELL:
      prevStatus = newBoard[action.x][action.y];
      newStatus = prevStatus === 'dead' ? 'alive' : 'dead';
      newBoard[action.x].splice(action.y, 1, newStatus);
      return Object.assign({}, state, {board: newBoard});
    default:
      return state;
  }
};
