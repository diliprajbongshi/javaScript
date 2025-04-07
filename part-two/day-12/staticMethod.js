// static method 

const target = {p:5,q:2}
const source = {p:1,b:2}

const returnObj = Object.assign(target,source)
// console.log(returnObj);

const obj1 = {name:"dilip"}
const obj2 = Object.assign({},obj1)
// console.log(obj2);


const obj3 = {
    a:1,
    b:{
        c:2
    }
}
const obj4 = Object.assign({},obj3)
obj4.b.c = 3
console.log(obj4);

const obj5 = structuredClone(obj3)
obj5.a = 400
obj5.b.c = 44
console.log(obj5.a);
console.log(obj5.b.c);
console.log(obj3);

const myObj = {
    a:"dilip",
    b:44
}
const myArr = Object.entries(myObj)
console.log(myArr);

const entries = [
    ["foo","bar"],
    ["baz",44]
]
const objEntries = Object.fromEntries(entries);
// console.log(objEntries);

const empl = {
    sal:100
}  

// object.freeze method e kono kicho poriborton joggo na amonki delete kora o jabe na
// Object.freeze(empl)
// empl.sal = 300
// console.log(empl);
// console.log(Object.isFrozen(empl));
// ================================================================

// object.seal method reassign kora jai value ke but delete ba add kora jai na

const dep = {
    name:"accounce"
}
Object.seal(dep)
console.log(dep);
dep.name = "finance"

console.log(dep);
