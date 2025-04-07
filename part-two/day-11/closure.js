// Closure
/*
closure is a function that can remember the variable from its outer function even after the outer function has executed.
Or a closure allows a function to access a variable from its outer scope.
*/
function outer(params) {
  let x = 10;
  return function inner(params) {
    console.log(x);
  };
}
// let inner = outer();
// console.log(inner());

function outerCount() {
  let count = 0;
  return function innerCount() {
    count++;
    console.log(count);
  };
}
let counter = outerCount();
// counter();
// counter();
// counter();

//Real world example

function bankAccountBalance(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function (amount) {
            balance = balance + amount;
            console.log("Deposited ",amount ,"balance ",balance);
        },
        withDraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
            }else{
                balance = balance - amount;
                console.log("Withdraw ",amount ,"balance ",balance);
            }
        },
        currentBalance:()=> `Current balance ${balance}` 
    }

}
// let depositedBalance = bankAccountBalance(100)

// console.log(depositedBalance.deposit(300));
// console.log(depositedBalance.withDraw(500));
// console.log(depositedBalance.currentBalance());


// Usefullness of closure
//1.You can stop variable private without exposing them
//2.You can variable pollution
//3.You can create a function factory
//4.You can keep a variable alive between multiple calls

function timer() {
    let sec = 0;
    return function (params) {
        sec++;
        console.log(sec);
    }
}
// let secon = timer()
// secon()
// secon()
// secon()


// Closure in event handler
function setupButton() {
    let amount = document.querySelector(".amount");
    let clickCount = 0;
    amount.innerText = clickCount;
    document.getElementById("myButton").addEventListener("click",function () {
       amount.innerText =  clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    })
}

setupButton()


