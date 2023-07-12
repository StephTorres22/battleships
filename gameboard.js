/* store where and place ships at specific co-ord

recieve an attack, determine whether a hit or a miss*/

import { Ship } from "./ships.js";

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

  placeShip(length, x, y) {
    let size = this.board.length;
    /* if (x > size || y > size || x < size || y < size) {
      alert(
        "These co-ordinates are not within the board, please choose new co-ordinates"
      );
      return; 
    }*/
    this.board[x][y] = Ship(length);
  }

  //WRITE YOUR BLOODY TESTS FIRST!!!
  recieveAttack(x, y) {
    //if()
  }
}
/* 
let gameboard = new GameBoard(8);
//console.log(board);
gameboard.placeShip(1, 2, 3);
console.log(gameboard.board[2][3]);
console.log(gameboard.board); */
