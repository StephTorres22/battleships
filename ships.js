export class Ship {
  constructor(length = 0, horizontal = true, noHit = 0, sunk = false) {
    this.length = length;
    this.horizontal = horizontal;
    this.noHit = noHit;
    this.sunk = sunk;
  }

    hit() {
      this.noHit += 1;
    }

    isSunk() {
      if (this.noHit >= this.length) {
        this.sunk = true;
      }
      return this.sunk;
    }
  };



