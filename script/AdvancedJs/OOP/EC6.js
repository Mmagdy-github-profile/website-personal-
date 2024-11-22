/*eslint-disable*/
class Cars {
  constructor(color, moduls) {
    this.color = color;
    this.moduls = moduls;
  }
  speead = function () {
    console.log(`The ${this.moduls}: speead 1000ks`);
  };
}

let car = new Cars("red", "BMW");
console.log(car.speead());
