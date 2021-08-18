let table = document.createElement("table");
let titleTr = document.createElement("tr");
let titlePrice = document.createElement("td");
let titleName = document.createElement("td");
titlePrice.append("Цена");
titleName.append("Название ");
titleTr.append(titleName);
titleTr.append(titlePrice);
table.append(titleTr);
document.body.append(table);
let tr;
let td;
let sum = 0;
let name;
let price;
let div = document.createElement("div");
div.className = "text";
div.append(`Общая цена: ${sum}`);
document.body.append(div);
function add() {
  let name = document.getElementById("name").value;
  console.log(name);
  let price = parseFloat(document.getElementById("price").value);
  if (name !== "" && !isNaN(price)) {
    td = document.createElement("td");
    tr = document.createElement("tr");
    td.append(name);
    tr.append(td);
    table.append(tr);
    td = document.createElement("td");
    td.append(price);
    tr.append(td);
    sum = Number(sum) + Number(price);
    div.textContent = `Общая цена: ${sum}`;
  } else {
    alert("Вы ввели неправильные данные!");
  }
}
