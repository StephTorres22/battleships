/* store where and place ships at specific co-ord

recieve an attack, determine whether a hit or a miss*/

import { Ship } from "./ships.js";

export class GameBoard {
  constructor(size) {
    this.board = this.#createBoard(size);
    this.shipStore = [];
    this.attacksReceived = [];
  }

  #createBoard(size) {
    let board = new Array(size);

    for (let i = 0; i < size; i++) {
      board[i] = new Array(size);
      for (let j = 0; j < size; j++) {
        board[i][j] = [i, j];
      }
    }
    return board;
  }

  placeShip(ship, x, y) {
    let size = this.board.length;
    this.shipStore.push(ship);
    /* if (x > size || y > size || x < size || y < size) {
      alert(
        "These co-ordinates are not within the board, please choose new co-ordinates"
      );
      return; 
      
    }*/
    for (let i = 0; i < ship.length; i++) {
      if (ship.horizontal) {
        this.board[x + i][y] = ship;
      } else {
        this.board[x][y + i] = ship;
      }
    }
  }

  //WRITE YOUR BLOODY TESTS FIRST!!!
  receiveAttack(x, y) {
    let target = this.board[x][y];

    //keeps track of what attacks have been launched and where.
    this.attacksReceived.push([x, y]);
    if (target instanceof Ship) {
      target.hit();
      this.allShipsSunk()
    } else {
      //might not need this false statement
      target = false;
      return "You missed!";
    }
  }

  allShipsSunk() {
    return this.shipStore.every((ship) => ship.isSunk())
  }
}

/* let gameboard = new GameBoard(8);
let patrol = new Ship(2)
gameboard.placeShip(patrol, 2, 3);
//console.log(gameboard.board[2][3]);
console.log(gameboard.board); 
patrol.hit();
console.log(gameboard.board); */
