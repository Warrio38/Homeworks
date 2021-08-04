// #1 Задание
const user = {
  firstName: "Nikola",
  secondName: "Tesla",
  getFullName: function () {
    let fullName = `${this.firstName} ${this.secondName}`;
    return fullName;
  },
};
console.log(user.getFullName());
// #2 Задание
const anUser = {
  firstName: "Steve",
  secondName: "Jobs",
};
console.log(user.getFullName.call(anUser));
// #3 Задание
const thrdUser = {
  firstName: "Steve",
  secondName: "Wozniak ",
};
console.log(user.getFullName.apply(thrdUser));
// #4 Задание
const frthUser = {
  firstName: "Julia ",
  secondName: "Roberts",
};
let binder = user.getFullName.bind(frthUser);
console.log(binder());
// #5 Задание, я возможно не так понял задание, но, насколько я понял мы должны были создать функцию конструктор и использовать её.
function ObjectConstructor() {
  let object = {}
  this.firstName = function (value) {
    object.firstName = value;
    return object
  };
  this.secondName = function (value) {
    object.secondName = value;
    return object
  };
}
let construct = new ObjectConstructor()
console.log(construct.secondName('Hoggart'))
console.log(user.getFullName.apply(construct.firstName('Johnny')));
console.log(construct.firstName('Steve'))
console.log(user.getFullName.apply(construct.secondName('Jobs')));
console.log(construct.secondName('Roberts'))
console.log(user.getFullName.apply(construct.firstName('Julia')))
// #6 Задание
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
console.log(calc.sum(5));