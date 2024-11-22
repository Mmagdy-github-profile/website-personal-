/*eslint-disable*/
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

// daly("Hy👋", 0);
// daly("Bonjuer👋", 8000);
// daly("مرحب👋", 5000);
// all
Promise.all([daly("Hy👋"), daly("Bonjuer👋"), daly("مرحب👋")])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// any
Promise.any([daly("Hy👋", 500), daly("Bonjuer👋", 500), daly("مرحب👋", 500)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// allSettled
Promise.allSettled([
  daly("Hy👋", 0),
  daly("Bonjuer👋", 500),
  daly("مرحب👋", 300),
])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// race
Promise.race([daly("Hy👋", 500), daly("Bonjuer👋", 100), daly("مرحب👋", 500)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
