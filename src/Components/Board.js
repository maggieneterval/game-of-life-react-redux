import React from 'react';
import RowContainer from '../Containers/RowContainer';

export default class Board extends React.Component {

  render () {
    const {board} = this.props;
    console.log('board is rendering')
    return (
      <table id="board">
        <tbody>
          {
            board.map( (row, x) => (
              <RowContainer key={x} x={x} />
            ))
          }
        </tbody>
      </table>
    );
  }
}
