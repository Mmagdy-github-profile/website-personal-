/*eslint-disable*/
class Laptop {
  constructor(brand, moduls, presnt = 100) {
    this.brand = brand;
    this.moduls = moduls;
    this.presnt = presnt;
  }
  butrryPreasnt = function () {
    if (this.presnt >= 15) {
      this.presnt -= 15;
      console.log(`The ${this.moduls} : ${this.presnt}%`);
    } else {
      console.log("No");
    }
  };
  charrgPatrn = function () {
    this.presnt += 25;
    if (this.presnt > 100) {
      this.presnt = 100;
    }
    console.log(`Battery After Charing: ${this.presnt}%`);
  };
}

let lap1 = new Laptop("G7", "Apple");
let lap2 = new Laptop("mcsbook", "DELL");
