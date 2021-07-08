let income = document.querySelectorAll('td[data-id="revenue-value"]');
let Total = 0;
let i = 0;
let incomeTC = income[i].textContent;
let arIncome = incomeTC.split("");
// TC = Text Content
while (i < income.length) {
  incomeTC = income[i].textContent;
  arIncome = incomeTC.split("");
  if (arIncome[arIncome.length - 1] === "B") {
    arIncome.pop();
    Total += Number(arIncome.join("")) * 1000000000;
    i++;
  } else if (arIncome[arIncome.length - 1] === "M") {
    arIncome.pop();
    Total += Number(arIncome.join("")) * 1000000;
    i++;
  } else {
    Total += Number(arIncome.join(""));
    i++;
  }
}
document.getElementById('summ').textContent += Total;
