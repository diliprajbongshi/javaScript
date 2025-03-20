// variable shadowing
let message = "I am doing great";

function outer() {
    let message = "I am outer";
    console.log(message);
}
outer();
console.log(message);













