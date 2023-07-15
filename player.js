/* player has a personal gameboard.

a number of ships to place on their gameboard.

a turn in which they are able to launch an attack on the opponents gameboard.*/

import { GameBoard } from "./gameboard";
//import { Ship } from "./ships";

class Player {
  constructor(size, turn) {
    this.board = new GameBoard(size);
    this.turn = turn;
  }

  attack(){
    
  }
}
