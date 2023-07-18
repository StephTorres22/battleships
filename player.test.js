import { GameBoard } from "./gameboard";
import { Ship } from "./ships";
import { Player } from "./player";

test("test", () => {
  expect("test").toEqual("test");
});

test("Player attacks another board", () => {
  const playerOne = new Player(new GameBoard(8), 1);
  const playerTwo = new Player(new GameBoard(8), -1);

  playerOne.attack(1, 2, playerTwo)
  
  let actual = playerTwo.board.attacksReceived;

  expect(actual).toEqual([[1, 2]]);
});
