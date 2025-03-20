// rest parameter
function sum(a,b,...rest) {
    console.log(a,b,rest);
}
// sum(1,2,3,4,5,6,7)

// nested function
function outer() {
    console.log("Outer function");
    return function inner(){
        console.log("inner function");
    }
}
// console.log(outer());
// ==========================================================
//Call back function
/* jakhon kono function ke arekti function er argue ment hisabe pathano hoy takhon take callback function bole
*/
let toCallbuz = false;
function foo(func){
   console.log("foo");
   if (toCallbuz) {
       func()
   }
}

// foo(function(){
//     console.log("buj");
// }) 


// who call the callback function ?
/*A callback function will be called inside the function where we are passing the callback function as a arguement but it will be called based 
on your bussiness case and user logic. */

// pure function
/*
pure function is a function that returns or provides the same output 
for the same input so it means as long as providing the same output
it is supposed to give you same as long as you are 
*/

function pureFunc(name){
    console.log("My name is ",name);
}
// pureFunc("dilip")
// ===================================================================
// Higher oder function 

function returnFunc() {
    return function(){
        console.log("dummy");
    }
}
const result = returnFunc();
// console.log(result());
// =================================================================
// Arrow function 
const myHome = ()=>{
    console.log("Kalatia");
}
// ===================================================================
// IIFE (imediately invoked function expression)

(function(count){
    console.log("iife",count);
})(1)

// ===================================================================
// Recurtion 
// Recursion means a function call itsefl 
function add(){
    add();
}
function fetchWater(count) {
    console.log("fetching water .....",count);
    if (count === 0) {
      console.log("No more water is left to fetch"); 
      return  
    }
    fetchWater(count - 1)
}

fetchWater(5)
// ===================================================================














