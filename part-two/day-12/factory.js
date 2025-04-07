// factory function 
function createUser(name,age){
    return{
        name,
        age,
        greet(){
            console.log("This is ",this.name);
        }
    }
}

let user1 = createUser("dilip",35)
let user2 = createUser("ponno",5)
// console.log(user1);
// console.log(user2);
// user1.greet()


// =============================
let profile = {
    name:"Dilip",
    company:"nothing",
    message:function () {
        console.log(`${this.name} is working ${this.company}`);
    },
    address:{
        city:"Dhaka",
        country:"Bangladesh",
        greeting:function () {
            console.log("Welcome to bangladesh");
        }
    },
    salary:100

}

for(let key in profile){
    // console.log(key);
//    console.log(profile[key]);
}
console.log(Object.keys(profile));

console.log(profile.salary);
if(!profile.salary){
    console.log("salary is not existed");
}
profile.message()
console.log(profile.address.country);
profile.address.greeting()