let table = document.getElementById('table')
document.body.append(table);
let tr;
let td;
let button;
let sum = 0;
let name;
let price;
let div = document.createElement("div");
div.className = "text";
div.append(`Общая цена: ${sum}`);
document.body.append(div);
function add() {
  let name = document.getElementById("name").value;
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
    td = document.createElement("td");
    button1 = document.createElement('button');
    button1.append('Удалить')
    td.append(button1)
    tr.append(td)
    table.append(tr)
    button1.addEventListener('click', remover)
    sum = Number(sum) + Number(price);
    div.textContent = `Общая цена: ${sum}`;
  } else {
    alert("Вы ввели неправильные данные!");
  }
}
function remover(){
  console.log(event.target.outer)
}
