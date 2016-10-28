import React from 'react';

export default class Cell extends React.Component {

  render () {
    const {x, y, toggleCell, board} = this.props;
    const status = board[x][y];
    return (
      <td
        className={status === 'dead' ? 'dead' : 'alive'}
        onClick={ () => toggleCell(x,y) }
      >
      </td>
    );
  }

}
