// console.log(this);
// function
// object
"use strict";
//inside of an object -> implicit(অন্তর্নিহিত) binding
const employee = {
  id: 22,
  firstName: "Dilip",
  lastName: "raj",
  returnThis: function () {
    return this;
  },
  getFullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
// console.log(employee.returnThis());
// console.log(employee.getFullname());
let tom = {
  name: "Tom",
  age: 7,
};
let jerry = {
  name: "Jerry",
  age: 3,
};
function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
  console.log(obj);
}

greetMe(tom);
tom.logMessage();
greetMe(jerry);
jerry.logMessage();

// inside function

function sayName() {
  console.log(this);
}

sayName();

function outer(a) {
  console.log("This is outer function", this);

  return function inner() {
    console.log("This is inner function", this);
  };
}

const outerResult = outer(4);

outerResult(55);

const result = () => {
  console.log("This is arrow", this);
};
result();

const getFood = {
  foodName: "Mango",
  color: "yellow",
  //   myFood: function() {
  //     console.log(`${this.name} is ${this.color}`);
  //   },
  myFood: function () {
    return () => {
      console.log(`${this.foodName} is ${this.color}`);
    };
  },
};
const resultFood = getFood.myFood()
resultFood()
