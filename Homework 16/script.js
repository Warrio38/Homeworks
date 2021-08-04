const personJohn = {
  name: "John",

  sayHello: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};
personJohn.sayHello();
const sysAdmin = {
  name: "Bob",
  __proto__: personJohn,
};
sysAdmin.sayHello();

const clientNatalia = {
  name: "Natalia",
  __proto__: personJohn,
};
clientNatalia.sayHello();

function Person(name) {
  this.name = name;

  this.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
  };
}

function Employee(name) {
  this.name = name;
}

function Client(name) {
  this.name = name;
}
Employee.prototype = new Person();
Client.prototype = new Person();
const personJohn2 = new Person("John");
const sysAdmin2 = new Employee("Bob");
const clientNatalia2 = new Client("Natalia");
personJohn2.sayHello();
sysAdmin2.sayHello();
clientNatalia2.sayHello();
function Student(name, marks) {
  let Student = {
    name: name,
    marks: marks,
    averageMark: function () {
      let sum = marks.reduce((number, currentValue) => number + currentValue);
      let result = sum / marks.length;
      return result;
    },
  };
  return Student;
}
const students = [
  new Student("Student 1", [10, 9, 8, 0, 10]), // имя, оценки
  new Student("Student 12", [10, 0, 8, 0, 3, 4]),
];
console.log(students[0].averageMark());
