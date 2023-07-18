/* player has a personal gameboard.

a number of ships to place on their gameboard.

a turn in which they are able to launch an attack on the opponents gameboard.*/

import { GameBoard } from "./gameboard";
//import { Ship } from "./ships";

export class Player {
  constructor(board, turn) {
    this.board = board;
    this.turn = turn;
  }

  

  attack(x, y, oppenent) {
    oppenent.board.receiveAttack(x, y);
  }
}
