// object 
let abc = {} // object literal

let obj = {
    name:"Dilip",
    age:40,
    "my-cousin":"Abc"
}
obj.isSeniarcityzen = false;
// console.log(obj["my-cousin"]);
// delete obj["age"]
// console.log(obj);
let someKey = "age";

// console.log(obj[someKey]); 
// console.log(obj);

// let car = prompt("which is your favourite car")

// let favCar = {
//     [car]:5
// }
// console.log(favCar);
// constructor function  
// constructor function e function name capital letter dia soru hoy
function Car(name,model){
   this.name = name;
   this.model = model;
}

let bmw = new Car("Bmw","b4")
let audi = new Car("Audi","a8")
// console.log(audi);
// console.log(bmw);
// console.log(bmw instanceof Car);

const user = new Object()
user.name = "afasdf";
user.age = 44;

console.log(user);