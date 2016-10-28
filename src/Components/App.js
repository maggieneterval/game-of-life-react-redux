import React, { Component } from 'react';
import BoardContainer from '../Containers/BoardContainer';
import MenuContainer from '../Containers/MenuContainer';

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Game of Life</h1>
        <BoardContainer />
        <MenuContainer />
      </div>
    );
  }
}
