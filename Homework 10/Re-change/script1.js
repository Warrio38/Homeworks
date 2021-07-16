function taskOne() {
  document.querySelector("#title span").textContent = "2020";
}
taskOne();
function taskTwo() {
  let del = document.querySelector("[my-attribute]");
  del.removeAttribute("my-attribute");
}
taskTwo();
function taskThree() {
  let green = document.querySelectorAll("[data-id]");
  for (let i = 0; i < green.length; i++) {
    green[i].style.backgroundColor = "limegreen";
  }
}
taskThree();
function taskFour() {
  let table = document.querySelector("table");
  let newTd = document.createElement("td");
  let newTr = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    newTd = document.createElement("td");
    newTd.appendChild(document.createTextNode("Something"));
    newTr.appendChild(newTd);
  }
  table.appendChild(newTr);
}
taskFour();
function taskFive() {
  document.querySelector("tr").remove();
}
taskFive();
