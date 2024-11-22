/*eslint-disable*/
// const daly = (massage, timer) =>
//   new Promise((resolve, reject) => {
//     if (!massage) {
//       reject("Emapty Massge");
//     } else if (timer <= 0) {
//       reject("No Timer");
//     } else {
//       setTimeout(() => {
//         resolve(massage);
//       }, timer);
//     }
//   });
// daly("Hallo", 500)
//   .then((data) => {
//     console.log(data);
//     return daly("Good Moring?", 1000);
//   })
//   .then((data) => {
//     console.log(data);
//     return daly("How Can I Help You?", 2000);
//   })
//   .then((data) => {
//     console.log(data);
//     return daly("IM Happy my Helped You.", 3000);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => daly(err));
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
async function dalyMassage() {
  const dataArr = [
    ["Hallo Sare", 500],
    ["How Can I Help You?", 700],
    ["IM Happy my Helped You.", 900],
  ];
  for (i = 0; i < dataArr.length; i++) {
    let mass = await daly(dataArr[i][0], dataArr[i][1]);
    console.log(mass);
  }
}

function makeSafe(fn, errHandler = (err) => console.log(err)) {
  return fn().catch(errHandler);
}

makeSafe(dalyMassage);

//   let mass = await daly("", 1000);
//   console.log(mass);

//   mass = await daly("How Can I Help You?", 2000);
//   console.log(mass);

//   mass = await daly("IM Happy my Helped You.", 3000);
//   console.log(mass);
// }
// dalyMassage().catch((err) => console.log(err));
