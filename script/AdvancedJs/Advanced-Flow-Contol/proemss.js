/*eslint-disable*/
// setTimeout(() => {
//   console.log("Hi");
//   setTimeout(() => {
//     console.log("Good Moring?");
//     setTimeout(() => {
//       console.log("How Can I help You?");
//       setTimeout(() => {
//         console.log("(Yes/No)?");
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

const daly = (massage, timer) =>
  new Promise((resolve, reject) => {
    if (!massage) {
      reject("Emapty Massge");
    } else if (timer <= 0) {
      reject("No Timer");
    } else {
      setTimeout(() => {
        resolve(massage);
      }, timer);
    }
  });
daly("Hallo", 500)
  .then((data) => {
    console.log(data);
    return daly("Good Moring?", 2000);
  })
  .then((data) => {
    console.log(data);
    return daly("How Can I Help You?", 4000);
  })
  .then((data) => {
    console.log(data);
  })

  .catch((err) => daly(err));

// const temp = new Promise((resolve, reject) => {
//   reject("Hallo How Are You");
// });
// temp.then(() => console.log("Hallo Massge")).catch((err) => console.log(err));
