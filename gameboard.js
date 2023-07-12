/* store where and place ships at specific co-ord

recieve an attack, determine whether a hit or a miss*/

import { escape } from "querystring";
import { Ship } from "./ships.js";
import { log } from "console";

/* export function GameBoard() {
  //this might be doodie

  return {
    createBoard(size) {
      let board = new Array(size);

      for (let i = 0; i < size; i++) {
        board[i] = new Array(size);
        for (let j = 0; j < size; j++) {
          board[i][j] = [i, j];
        }
      }
      return board
    },
    placeShip(length, x, y) {
      this.createBoard()[x][y] = Ship(length);
    },
  };
} */

export class GameBoard {
  constructor(size) {
    this.board = this.createBoard(size);
    this.numberOfShips = 0;
  }

  createBoard(size) {
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
    this.numberOfShips += 1;
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
    if (target instanceof Ship) {
      target.hit();
      if (target.isSunk) {
        this.numberOfShips -= 1;
      }
    } else {
      target = false;
      return "You missed!";
    }
  }
}

/* let gameboard = new GameBoard(8);
let patrol = new Ship(2)
gameboard.placeShip(patrol, 2, 3);
//console.log(gameboard.board[2][3]);
console.log(gameboard.board); 
patrol.hit();
console.log(gameboard.board); */
