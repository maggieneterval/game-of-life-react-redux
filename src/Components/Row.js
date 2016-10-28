import React from 'react';
import CellContainer from '../Containers/CellContainer';

export default class Row extends React.Component {
  render () {
    const {board, x} = this.props;
    const row = board[x];
    return (
      <tr>
        {
          row.map ( (cell, y) => (
            <CellContainer x={x} y={y} key={`${x}-${y}`} />
          ))
        }
      </tr>
    );
  }
}

