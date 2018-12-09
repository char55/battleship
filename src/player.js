import React from 'react';

import Board from './board.js'

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'X',
      round: 1,
    };
    this.nextPlayer = this.nextPlayer.bind(this);
    this.newRound = this.newRound.bind(this);
  }

  nextPlayer() {
    const Allplayers = [1, 2];
    this.setState({player: Allplayers[this.state.round % 2]})
    this.newRound(this.state.round)
  }
  
  newRound() {
    this.setState({round: this.state.round + 1})
  }

  render() {
    const status = `Next player: ${this.state.player}`;
    return (
      <div>
      <div className="status">{status}</div>
        <Board 
          player={this.state.player} 
          nextPlayer={this.nextPlayer} 
          round={this.state.round} 
          squares={this.props.squares}
        />
      </div>
    );
  }
}

export default Player;