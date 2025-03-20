/*
# There are four types of scope
1.Global scope
2.Function scope
3.Block scope
4.Module scope
*/

/*
1.Global scope
vatiables declared outside of any function or block scope are in the global scope
*/
// var hoche window object er ekta property.
// var name = "Dilip" 
// let name = "Dilip"
// function result(){
//     console.log("My name is ",name);
// }
// result()
// console.log(name);

/*2.function scope
    vatiables declared inside in function are only accessable within that function
*/
function one(){
    let name = "dilip"
    console.log(name);
}
// one()
// console.log(name); it is not defined function scope
/*3.Block scope
    vatiables declared   inside in function are only accessable within that function
*/
{
    let name = "dilip"
    console.log(name);
}

// console.log(name); name is not defined because it is out of block scope.

// var is always function scope but let and const are always Block scope
