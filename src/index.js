import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Player from './player.js'


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(100).fill(null),
    };
    this.randomShipLocation = this.randomShipLocation.bind(this)
    this.insertShip = this.insertShip.bind(this)
    this.ships = this.ships.bind(this)
  }

  ships() {
    // carrier -      5 tiles -  a
    // battleship -   4 tiles -  b
    // cruiser -      3 tiles -  c   
    // destroyer -    2 tiles -  d
    // submarine -    3 tiles -  e
    const carrier = this.randomShipLocation(5);
    const battleship = this.randomShipLocation(4);
    const cruiser = this.randomShipLocation(3);
    const destroyer = this.randomShipLocation(2);
    const submarine = this.randomShipLocation(3);
    
    console.log(this.state.squares)
    this.insertShip(carrier, "a");
    this.insertShip(battleship, "b");
    this.insertShip(cruiser, "c");
    this.insertShip(destroyer, "d");
    this.insertShip(submarine, "e");
    console.log(this.state.squares)
    return;
  }

  insertShip(shipArray, identifier) {
    const squares = this.state.squares.slice();
    console.log("This is the array ",shipArray)
    shipArray.forEach((spot) => {
      squares[spot] = identifier;
    })
    this.setState({squares: squares});
    return
  }

  randomShipLocation(tiles) {
    // intialize ship locations
    // randomly assigns
  
    // const orientation = Math.round((Math.random()));
    const rowsDown = Math.round((Math.random())*9); 
    const start = (Math.round((Math.random()) * (10 - tiles))) + rowsDown;
    const location = [];
    for(let i = 0; i < tiles; i++){
      location.push(start+i)
    }
    return location;
  } 

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Player squares={this.state.squares}/>
          <button onClick={() => {
            this.ships()
          }}> 
          generate ships
          </button>
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

