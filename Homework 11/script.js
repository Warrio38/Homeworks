let numb = 1;
let sel = document.querySelectorAll("button")[1];
sel.addEventListener("click", remove);
function newDeal(value) {
  let TBody = document.getElementById("tb");
  let newTr = document.createElement("tr");
  let newTd;
  newTd = document.createElement("td");
  newTd.addEventListener("click", done);
  newTd.append(value);
  newTr.appendChild(newTd);
  TBody.appendChild(newTr);
  numb++;
  input.value = "";
}

function done() {
  let check = this;
  if (check.className === "done") {
    check.className = "ndone";
  } else {
    check.className = "done";
  }
}
function remove() {
  let i = parseFloat(i3.value);
  let check = document.querySelectorAll(`tr`)[i];
  if (!isNaN(i) && i < numb) {
    check.remove();
  } else {
    alert("Неверные данные");
  }
}
