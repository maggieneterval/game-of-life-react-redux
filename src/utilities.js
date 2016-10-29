import _ from 'lodash';

export function generateBoard (length, width, random=false) {
  const matrix = [];
  for (let i = 0; i < length; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      let cell;
      if (random){
        let randomNumber = Math.random();
        cell = randomNumber < 0.5 ? 'dead' : 'alive';
      } else {
        cell = 'dead';
      }
      row.push(cell);
    }
    matrix.push(row);
  }
  return matrix;
}

export function toggleSingle (board, x, y) {
  const oldStatus = board[x][y];
  const newStatus = oldStatus === 'dead' ? 'alive' : 'dead';
  board[x][y] = newStatus;
  return board;
}

function countLiveNeighbors (board, x, y) {
  let count = 0;
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (i === x && y === j) continue;
      if (board[i] && board[i][j] && board[i][j] === 'alive'){
        count++;
      }
    }
  }
  return count;
}

export function step (board) {
  const newBoard = _.cloneDeep(board);
  for (let x = 0; x < board.length; x++){
    for (let y = 0; y < board[x].length; y++){
      let cellStatus = board[x][y];
      let liveNeighbors = countLiveNeighbors(board, x, y);
      if (cellStatus === 'alive'){
        if (liveNeighbors === 2 || liveNeighbors === 3){
          newBoard[x][y] = 'alive';
        } else {
          newBoard[x][y] = 'dead';
        }
      } else {
        if (liveNeighbors === 3){
           newBoard[x][y] = 'alive';
        }
      }
    }
  }
  return newBoard;
}
