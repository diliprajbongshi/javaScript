// Rock paper scissor
function startGame() {
  let userChoice = prompt("Enter a user input");
  let userInput = userChoice.toLowerCase()
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }
  console.log("user selected", userInput);
  console.log("computer selected", computerChoice);
  
  switch (userInput) {
    case "rock":
      switch (computerChoice) {
        case "scissor":
          console.log("User is win");
          break;
        case "paper":
          console.log("Computer is win");
          break;
        default:
          console.log("The game is Tie");
      }
      break;
  
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("User is win");
          break;
        case "scissor":
          console.log("Computer is win");
          break;
        default:
          console.log("The game is Tie");
      }
      break;
  
    case "scissor":
      switch (computerChoice) {
        case "paper":
          console.log("User is win");
          break;
        case "rock":
          console.log("Computer is win");
          break;
        default:
          console.log("The game is Tie");
      }
      break;
  
    default:
      console.log("Please check the input");
  }
//   if (
//     (userInput === "rock" && computerChoice === "scissor") ||
//     (userInput === "paper" && computerChoice === "rock") ||
//     (userInput === "scissor" && computerChoice === "paper")
//   ) {
//     console.log("User is win");
//   } else if (userInput === computerChoice) {
//     console.log("The game is Tie");
//   } else if (
//     (userInput === "rock" && computerChoice === "paper") ||
//     (userInput === "scissor" && computerChoice === "rock") ||
//     (userInput === "paper" && computerChoice === "scissor")
//   ) {
//     console.log("Computer is win");
//   } else {
//     console.log("Please check the input ");
//   }





  const playAgainGame = prompt("Do you want to play again? (yes/no)");
  const playAgain = playAgainGame ? playAgainGame.toLowerCase() : "no";
  if(playAgain === "yes"){
    startGame();
  }else{
    console.log("Thanks for play the game");
  }
}

startGame();
