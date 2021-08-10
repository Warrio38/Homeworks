if (localStorage.userName !== undefined) {
  document.body.innerHTML = "";
  let div = document.createElement("div");
  div.append(`Привет ${localStorage.userName}`);
  div.className = "text";
  document.body.append(div);
}
function logIn() {
  let input = document.querySelector("input");
  let name = input.value;
  if (name === "") {
    alert("Вы не написали имя");
  } else {
    localStorage.userName = name;
    document.body.innerHTML = "";
    let div = document.createElement("div");
    div.append(`Привет ${localStorage.userName}`);
    div.className = "text";
    document.body.append(div);
  }
}
