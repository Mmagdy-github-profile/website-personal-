/*eslint-disable*/
// creat Count Time Oppining✅
function cowndown() {
  let dataNow = new Date().getTime();
  let condownDate = new Date("Tue Sep 17 2025 11:41:43").getTime();
  let gap = condownDate - dataNow;
  let scound = 1000;
  let mount = scound * 60;
  let hour = mount * 60;
  let day = hour * 24;

  let textDay = Math.floor(gap / day);
  let textHour = Math.floor((gap % day) / hour);
  let textMount = Math.floor((gap % hour) / mount);
  let textsecand = Math.floor((gap % mount) / scound);

  document.querySelector(".condown__day").innerText = textDay;
  document.querySelector(".condown__hour").innerText = textHour;
  document.querySelector(".condown__mount").innerText = textMount;
  document.querySelector(".condown__secand").innerText = textsecand;

  if (gap < 0) {
    document.write(`Hello From Date Now ${dataNow}`);
    clearInterval(count);
  }
  if (textsecand < 10) {
    document.querySelector(".condown__secand").innerText = `0${textsecand}`;
  } else {
    document.querySelector(".condown__secand").innerText = textsecand;
  }
}

let count = setInterval(cowndown, 1000);

// Challeng Skills Items
const skillsArray = [
  {
    name: "HTML",
    experience: "2013",
    type: "frontend",
    class: `<i class="fa-brands fa-html5 skills__icon"></i>`,
  },
  {
    name: "CSS",
    experience: "2013",
    type: "frontend",
    class: ` <i class="fa-brands fa-css3-alt skills__icon"></i>`,
  },
  {
    name: "Javascript",
    experience: "2013",
    type: "frontend",
    class: ` <i class="fa-brands fa-js skills__icon"></i>`,
  },
  {
    name: "React",
    experience: "2016",
    type: "frontend",
    class: `<i class="fa-brands fa-react skills__icon"></i>`,
  },
  {
    name: "python",
    experience: "2017",
    type: "frontend",
    class: `<i class="fa-brands fa-python skills__icon"></i>`,
  },
  {
    name: "React Testing Library",
    experience: "2020",
    type: "frontend",
    class: `<i class="fa-solid fa-book-open-reader skills__icon"></i>`,
  },
  {
    name: "Node.js",
    experience: "2020",
    type: "backend",
    class: `<i class="fa-brands fa-node skills__icon"></i> `,
  },
  {
    name: "Express.js",
    experience: "2020",
    type: "backend",
    class: `<i></i>`,
  },
  {
    name: "Mongodb",
    experience: "2020",
    type: "backend",
    class: `<i class="fa-brands fa-stack-overflow skills__icon"></i>`,
  },
];

const elementSkills = document.querySelector("#skills");
// craet element Skills✅
// creat Yrars Skills By Defult✅
let newDate = new Date().getFullYear();
let skills = skillsArray
  .map((item) => {
    return `  <li data-type="${item.type}" data-name="${
      item.name
    }"class="skills__item">
            <div>
              <h2 class="skills__title">${item.name}</h2>
              <span class="skills__years">${
                newDate - item.experience
              } years</span>
            </div>
            ${item.class}
          </li>
  `;
  })
  .join("");
let appendUl = `<ul class="skills__list">${skills}</ul>`;
elementSkills.insertAdjacentHTML("beforeend", appendUl);

/* Boens */
document.querySelectorAll(".skills__button").forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".skills__button--isActive")
      .classList.remove("skills__button--isActive");
    element.classList.add("skills__button--isActive");
    document.querySelector(
      ".skills__list"
    ).classList = `skills__list ${element.dataset.type}`;
  });
});
