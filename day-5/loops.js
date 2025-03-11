// For loop
/* for(inicialization;condition;update){
   code
}*/

// for(let count = 1; count <= 5; count++){
//     console.log(count);
// }
let sum = 0;
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        sum = sum + i;
        // console.log(i);
    }
}
// console.log(sum);
let language = "JavaScript"
for (let i = 0; i < language.length; i++) {
    // console.log(language.charAt(i));
}

// Nested loop
for (let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++){
        // console.log("i = ",i,"j = ",j);
    }
}

// Break and continue

for (let i = 1; i <= 5; i++) {
    // console.log(i);
    // if (i === 3) {
    //     break
    // }
}
// continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue
    }
    console.log(i);
}