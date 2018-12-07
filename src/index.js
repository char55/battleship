import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Player from './player.js'


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Player />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

