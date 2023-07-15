import { GameBoard } from "./gameboard";
import { Ship } from "./ships";

test("Place ship, at specific co-ord", () => {
  let board = new GameBoard(8);
  let patrol = new Ship(2);
  board.placeShip(patrol, 3, 4);
  let actual = board.board[3][4];
  expect(actual).toBeInstanceOf(Ship);
  expect(actual).toBe(patrol);
  //expect(JSON.stringify(actual)).toBe(JSON.stringify(Ship(2)));
});

test("Place ship horizontally", () => {
  let board = new GameBoard(8);
  let cruiser = new Ship(3);

  board.placeShip(cruiser, 3, 4);
  expect(board.board[3][4]).toBe(cruiser);
  expect(board.board[4][4]).toBe(cruiser);
  expect(board.board[5][4]).toBe(cruiser);
});

test("Place ship vertically", () => {
  let board = new GameBoard(8);
  let cruiser = new Ship(3, false);

  board.placeShip(cruiser, 3, 4);
  expect(board.board[3][4]).toBe(cruiser);
  expect(board.board[3][5]).toBe(cruiser);
  expect(board.board[3][6]).toBe(cruiser);
});

test("Receive one attack, hit boat once", () => {
  let board = new GameBoard(8);
  let cruiser = new Ship(3);

  board.placeShip(cruiser, 3, 4);
  board.receiveAttack(4, 4);
  let actual = cruiser.noHit;
  expect(actual).toEqual(1);
});

test("Receive two attacka, hit boat twice", () => {
  let board = new GameBoard(8);
  let cruiser = new Ship(3);

  board.placeShip(cruiser, 3, 4);
  board.receiveAttack(4, 4);
  board.receiveAttack(5, 4);
  let actual = cruiser.noHit;
  expect(actual).toEqual(2);
});

test("Receive attack: missed", () => {
  let board = new GameBoard(8);
  let cruiser = new Ship(3);

  board.placeShip(cruiser, 3, 4);
  let actual = board.receiveAttack(6, 5);

  expect(actual).toEqual("You missed!");
});

/* 
NO LONGER VALID
test("How many ships?", () => {
  let board = new GameBoard(8);
  let patrol = new Ship(2);

  board.placeShip(patrol, 1, 1);
  let actual = board.numberOfShips;
  expect(actual).toBe(1);
}); */

/*
NO LONGER VALID
test("How many ships?", () => {
  let board = new GameBoard(8);
  let patrol = new Ship(2);
  let cruiser = new Ship(3, false);

  board.placeShip(patrol, 1, 1);
  board.placeShip(cruiser, 5, 8);
  let actual = board.numberOfShips;
  expect(actual).toBe(2);
}); */

test("Keep track of attacks", () => {
  let board = new GameBoard(8);

  board.receiveAttack(1, 1);
  board.receiveAttack(3, 4);
  let actual = board.attacksReceived;
  expect(actual).toStrictEqual([
    [1, 1],
    [3, 4],
  ]);
});

test("All ships sunk", () => {
  let board = new GameBoard(8);
  let patrol = new Ship(2);
  board.placeShip(patrol, 2, 1)
  let actual = board.allShipsSunk();

  expect(actual).toEqual(false);
});

test("All ships sunk: After attack, ship sunk", () => {
  let board = new GameBoard(8);
  let patrol = new Ship(2);

  board.placeShip(patrol, 2, 2);
  board.receiveAttack(2, 2);
  board.receiveAttack(3, 2);
  let actual = board.allShipsSunk();
  expect(actual).toEqual(true);
});

test("All ships sunk: After attack, ship not sunk", () => {
  let board = new GameBoard(8);
  let patrol = new Ship(2);

  board.placeShip(patrol, 2, 1);
  board.receiveAttack(2, 1);
  let actual = board.allShipsSunk();
  expect(actual).toEqual(false);
});
