/*eslint-disable*/
const Cars = function (color, moduls, names) {
  this.color = color;
  this.moduls = moduls;
  this.names = names;
  // this.login = function () {
  //   console.log(`welcame: ${names} in ${moduls}`); //==========> brey bracts  طريقه غير صحيحه علشان هيتم نسخ
  //   // Methoud لكل كائن جديد يتم أنشاءه وسيتم أستهلاك من حجم الذاكره
  // };
};

Cars.prototype.logout = function () {
  console.log(`out: ${this.names} in ${this.moduls}`); //======> هذه هي الطريقه الصحيحه لكتابه muthoud واحده داخل ال fun
};

const car1 = new Cars("red", "2025", "BMWi7");
const car2 = new Cars("blue", "2004", "BMWi4");

console.log(car1);
console.log(car2);
console.log(car1.logout == car2.logout);

/* new operator*/
// Creat new empty object
// set the prototype
// call function with given arguments & Bind this to the new object
// Return object
