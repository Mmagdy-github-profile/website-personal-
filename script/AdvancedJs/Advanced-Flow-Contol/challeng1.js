/*eslint-disable*/
const butnUser = document.querySelector(".user");
const butnGetData = document.getElementById("butn");

butnGetData.addEventListener("click", async (event) => {
  event.preventDefault();
  const userName = butnUser.value;
  try {
    const resul = await fetchData(userName);
    fillData({ id: "img", data: resul.avatar_url, isImag: true });
    fillData({ id: "name", data: resul.name });
    fillData({ id: "bio", data: resul.bio });
    fillData({ id: "twitter_username", data: resul.twitter_username });
    fillData({ id: "followers", data: resul.followers });
  } catch (err) {
    alert(err);
  }
});

async function fetchData(userName) {
  let info = await fetch(`https://api.github.com/users/${userName}`);
  if (info.ok) {
    return info.json();
  } else {
    return Promise.reject(new Error("Not Found Name In Github"));
  }
}

const fillData = ({ id, data, isImag }) => {
  const ele = document.querySelector(`#${id}`);
  if (!isImag) {
    ele.textContent = data;
  } else {
    ele.src = data;
  }
};
