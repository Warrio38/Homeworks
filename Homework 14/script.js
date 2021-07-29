function arrayFill(filler, times) {
  let array = [];
  for (let i = 0; i < times; i++) {
    array.push(filler);
  }
  return array;
}
let b = arrayFill("x", 5);
console.log(b);

function flatter(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array)) {
      for (let o = 0; o < array[i].length; o++) {
        result = array[i][o] + result;
      }
    } else {
      result = array[i] + result;
    }
  }
  return result;
}
let result = 0;
function flatter3(array) {
  let result = array
    .flat()
    .reduce((number, currentValue) => number + currentValue);
  return result;
}
let c = [[1, 2, 3], [4, 5], [6]];
let a = flatter(c);
console.log(a);
let d = flatter3([[1, 2, 3], [4, 5], [6]]);
console.log(d);
const input = document.getElementById("value");
const container = document.getElementById("container");
function counter(outEl) {
  let count = input.value;
  if(isNaN(parseFloat(count))){
    count = 0;
    outEl.textContent = `Счетчик: ${count}`;
  }
  return function () {
    count++
    outEl.textContent = `Счетчик: ${count}`;
  };
}
function countersButton() {
  container.append(createCounter());
  input.value = "";
}

function createCounter() {
  const newContain = document.createElement("div");
  const outEl = document.createElement("span");
  outEl.append(`Счетчик: ${input.value}`);
  const button = document.createElement("button");
  button.append("+");
  newContain.append(outEl);
  newContain.append(button);
  const NewCounter = counter(outEl);
  button.addEventListener("click", NewCounter);
  return newContain;
}
