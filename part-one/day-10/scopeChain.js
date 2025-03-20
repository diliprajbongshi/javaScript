//Scope chain
let globalVar = "This is a global variable";

function outer() {
  let outerVariable = "This is a outer variable";
  function inner() {
    let innerVariable = "innnerVariable";
    console.log("This is a   innnerVariable ", innerVariable);
    console.log("This is a   outerVariable ", outerVariable);
    console.log("This is a   globalVar", globalVar);
  }
  inner();
}

// outer()

// another
var count = 10;

function outer(){
    // var count = 20;
    function inner(){
        // var count = 30
        console.log(count);
    }
    inner()
    console.log(count);
}
outer()
console.log(count);
