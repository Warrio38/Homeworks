if (localStorage.userName !== undefined) {
  hideform()
}
function logIn() {
  let input = document.querySelector("input");
  let name = input.value;
  if (name === "") {
    localStorage.userName = name;
    alert("Вы не написали имя");
  } else {
    hideform()
  }
}
function hideform(){
  document.body.innerHTML = "";
  let div = document.createElement("div");
  div.append(`Привет ${localStorage.userName}`);
  div.className = "text";
  document.body.append(div);
}
