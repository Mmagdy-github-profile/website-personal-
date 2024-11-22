async function dataUser(id) {
  if (!id) {
    throw console.error("No Id");
  } else {
    let result = await fetch(`https://dummyjson.com/users/${id}`);
    let getPostc = await fetch(`https://dummyjson.com/users/${id}/posts`);
    let getTodos = await fetch(`https://dummyjson.com/users/${id}/todos`);

    return {
      info: await result.json(),
      postc: await getPostc.json(),
      todos: await getTodos.json(),
    };
  }
}

dataUser(1).then((res) => {
  document.querySelector(
    ".bio__user"
  ).innerText = `${res.info.firstName} ${res.info.lastName}`;
  console.log(res);
});
