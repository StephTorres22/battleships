export function Ship(length, noHit = 0, sunk = false) {
  return {
    length,
    noHit,
    sunk,
    hit() {
      this.noHit += 1;
    },

    isSunk() {
      if (this.noHit >= length) {
        this.sunk = true;
      }
      return this.sunk;
    },
  };
}


