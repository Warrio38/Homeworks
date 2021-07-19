function setYear() {
  let i = document.querySelector("input");
  let find = document.querySelector("#title span");
  find.textContent = i.value;
}
let listener = document.querySelector("#removeAttrBtn");
listener.addEventListener("click", removeAttr, false);
function removeAttr() {
  let myattr = document.querySelector("[my-attribute]");
  myattr.removeAttribute("my-attribute");
}
let greenBtn = document.querySelector("#setGreenBtn");
greenBtn.addEventListener("click", setGreen, true);
function setGreen() {
  let data = document.querySelectorAll("[data-id]");
  for (i = 0; i < data.length; i++) {
    data[i].style.backgroundColor = "limegreen";
  }
  Event.stopPropagation();
}
let addRows = document.querySelector("#addRowBtn");
addRows.addEventListener("click", addRow);
function addRow() {
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
function removeScndRow() {
  let secondRow = document.querySelectorAll("tr")[2];
  secondRow.remove();
}
function srift() {
  let elem = document.querySelector("#title");
  elem.style.fontSize = "24px";
}
document.addEventListener("DOMContentLoaded", srift);
