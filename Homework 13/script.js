function createCalculator(a) {
  let result = 0;
  let complete;
  this.sum = function (b) {
    if (result !== 0) {
      result = result + b;
      complete = result;
    } else {
      result = a + b;
      complete = result;
    }
    return complete;
  };
  this.sub = function (b) {
    if (result !== 0) {
      result = result - b;
      complete = result;
    } else {
      result = a - b;
      complete = result;
    }
    return complete;
  };
  this.mult = function (b) {
    if (result !== 0) {
      result = result * b;
      complete = result;
    } else {
      result = a * b;
      complete = result;
    }
    return complete;
  };
  this.div = function (b) {
    if (result !== 0) {
      result = result / b;
      complete = result;
    } else {
      result = a / b;
      complete = result;
    }
    return complete;
  };
  this.set = function (b) {
    result = b;
    complete = result;
    return complete;
  };
}

let calc = new createCalculator(10);
console.log(calc.sum(5)); // 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100
