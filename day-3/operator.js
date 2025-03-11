// Asignment operator 
let count = 5;
count += 10; // count = count + 10; = 15
count -= 1; // count = count - 1;  = 14
count *= 4; // count = count * 4;  = 56
count /= 2; // count = count / 2;  = 28

// console.log(count);

// Asignment operator 
// loosely equal operator (==) 
console.log(4 == 4);
console.log(0 == false);
console.log(3 == "3");

// strict equal operator (===) 
console.log(3 === "3");
console.log(null === null);
console.log(undefined === undefined);
// conparison operator
4 > 2
6 > 5
5 >= 5

3 < 5
7 < 2
3 <= 3

// logical operator
/*

&&   ||    ??   !



*/
console.log("cow" && "horse");
console.log( 4 > 5 && 4 === 6);
console.log( 4 < 5 || 4 === 6);

let a1 = null ?? 1;
let a2 = undefined ?? 4;
let a3 = false ?? 4;
// console.log(a3);
// ternery operator 
let age = 30;
let com = age >= 40 ? "boro" : "choto"
// console.log(com);

// Bitwise operator
// 10 in decimal
// 10 in 32 decimal representation of 0,1
/*   
    Bitwise operator
    & / ^ ~ << >>
*/
/*
    15 & 9
    1111 1001
    15 / 2 = 7 (1);
    7 / 2 = 3 (1);
    3 / 2 = 1 (1)

    9 / 2 = 4(1)
    4 / 2 = 2(0)
    2 / 2 = 1(0)


*/

// Grouping 
let a = 2;
let b = 3;
let c = 4;
console.log(a + (b * c));
console.log((a + b) * c);

// type of
let text = "asdfasd"; 
let num = 33; 
console.log(typeof num);
console.log(typeof null);// object

// Instanceof

// object instanceof objectType