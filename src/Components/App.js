import React from 'react';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Game of Life</h1>
        <table id="board">
          <tbody>
            {
              this.props.board.map ((row, x) => (
                <tr key={x}>
                  {
                    row.map( (cell, y) => (
                      <td
                        className={cell === 'dead' ? 'dead' : 'alive'}
                        key={`${x}-${y}`}
                        onClick={() => this.props.toggleCell(x, y)}
                      >
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
        <div>
          <button disabled={this.props.isAutoPlaying} onClick={this.props.setRandomBoard}>Set random board</button>
          <button disabled={this.props.isAutoPlaying} onClick={this.props.step}>Step</button>
          <button disabled={this.props.isAutoPlaying} onClick={this.props.startAutoplay}>Start autoplay</button>
          <button disabled={!this.props.isAutoPlaying} onClick={this.props.stopAutoplay}>Stop autoplay</button>
          <button disabled={this.props.isAutoPlaying} onClick={this.props.clearBoard}>Clear board</button>
        </div>
      </div>
    );
  }
}
