// rest parameter
function sum(a,b,...rest) {
    console.log(a,b,rest);
}
// sum(1,2,3,4,5,6,7)

// nested function
function outer() {
    function inner(){
        console.log("inner function");
    }
    inner()
    console.log("Outer function");
}
outer()