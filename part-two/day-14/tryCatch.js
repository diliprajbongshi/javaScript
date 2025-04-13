// try {
//     // logic or code 
// } catch (error) {
//     // handle the error
// }

/*
1.Code inside try gets executed 
2.If no error in the try block,the catch block will be ignored and will not be executed
3.If there is an error in the try block, the execution of the try block will be suspended and control will move to the catch block.In the catch block you 
can find the error details and do the needful

*/
/* 
try {
    console.log("This is try block");
    // abc
    console.log("Execution end here");
} catch (error) {
    console.error("The error is hapen");
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
}
*/
function diviTion(a,b){
    try {
        if(b === 0){
            let err = new Error("Zero can not divide by two")
            throw err
        }
        let result = a/b;
        console.log(`The result is ${result}`);
    } catch (error) {
        // console.log(error);
        // console.log(error.message);
        console.log(error.stack);
    }
}
diviTion(20,4)
diviTion(20,0)

let person = {
    name:"Dilip",
    address:{
        city:"Dhaka"
    }
}
function getPostalCode(user) {
    try {
        console.log(user.address.city.country.postalCode);
    } catch (error) {
        console.log(error.message);
    }
}
// getPostalCode(person)
function validateAge(age) {
    try {
        if(isNaN(age)){
            throw new Error("Invalid input: Age must be a number")
        }
        console.log(`User age is ${age}`);
    } catch (error) {
        console.log(error.message);
    }
}

// validateAge("Adfasdf")
// validateAge(43)

// Rethrow 

function validateFrom(fromData) {
    try {
        if(!fromData.username) throw new Error("User is mandatory")
        if(!fromData.email.includes("@")) throw new Error("Eamil is not exit")
    } catch (error) {
        console.log("Validate issue found",error.message);
        throw error;
    }
}
try {
    validateFrom({username:"Dilip",email:"dilipgmail.com"})
} catch (error) {
    console.error("Showing the proper error",error.message);
}
