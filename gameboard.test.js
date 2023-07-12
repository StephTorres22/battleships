import { json } from "stream/consumers";
import { GameBoard } from "./gameboard";
import { Ship } from "./ships";

test("Place ship, at specific co-ord", () => {
  let board = new GameBoard(8);
  board.placeShip(2, 3, 4);
  let actual = board.board[3][4];
  expect(actual).toBeInstanceOf(Object);
  expect(JSON.stringify(actual)).toBe(JSON.stringify(Ship(2)));
});
/* so having JSON.stringify on both ends makes it pass but it's weird and i don't understand! */
