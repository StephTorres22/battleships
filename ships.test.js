import { Ship } from "./ships";

test("Ship is hit", () => {
  let patrol = Ship(2, 0);
  patrol.hit();
  let actual = patrol.noHit;

  expect(actual).toBe(1);
});

test("Ship is hit twice", () => {
  let ship = Ship(3, 0);
  ship.hit();
  ship.hit();

  let actual = ship.noHit;

  expect(actual).toBe(2);
});

test("Ship is sunk", () => {
  let smallBoat = Ship(1, 1);

  let actual = smallBoat.isSunk();
  expect(actual).toBe(true);
});

test("Combine getting hit and checking sunk status: hit once, not sunk", () => {
  let boat = Ship(2, 0);
  boat.hit();
  let actual = boat.isSunk();
  expect(actual).toBe(false);
});

test("Combine getting hit and checking sunk status: hit twice, sunk", () => {
  let boat = Ship(2, 0);
  boat.hit();
  boat.hit();
  let actual = boat.isSunk();
  expect(actual).toBe(true);
});
