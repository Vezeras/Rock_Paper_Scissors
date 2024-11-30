//Establish global variables to utilize in the following playRound function
const shoot = ["Rock", "Paper", "Scissors"];
let humanScore = 0
let compScore = 0

//Connects elements for the on-click buttons of the html document
const results = document.getElementById("results");
const Player = document.getElementById("Player");
const Computer = document.getElementById("Computer");
const Winner = document.getElementById("Winner");
const start = document.getElementById("start");
start.addEventListener("click", playRound);

//Function executes a round of rock, paper, scissors that keeps score and resets global variables once a winner is announced
function playRound(userguess) {
    const compguess = shoot[Math.floor(Math.random() * 3)];
    let result = "";
    let a = "";
   
//If statement resets global variables once a score of 5 is obtained
   if (humanScore === 5 && compScore < 5){
    a = "You reign supreme!";
    humanScore = 0, compScore = 0;
   }
   else if(compScore === 5 && humanScore < 5){
    a = "The Computer has dominated!";
    humanScore = 0, compScore = 0;
   }

//Following if...else statements to be used for various outcomes of the game and track score
    if (userguess === compguess) {
        result = "Draw!"
    }
    else if (userguess === null){
        result = "Game Ended!"
    }
    else{
        switch(userguess){
            case "Rock":
                result = (compguess === "Scissors") ? (++humanScore ,"You won, baby!") : (++compScore , 'The computer has bested you.');
                break;
            case "Paper":
                result =(compguess === "Rock") ? (++humanScore , "You won, baby!" ): (++compScore , 'The computer has bested you.');
                break;
            case "Scissors":
                result =(compguess === "Paper") ? (++humanScore , "You won, baby!"): (++compScore , 'The computer has bested you.');
                break;
            case "End":
                result = "Game Ended!" , compScore = 0 , humanScore = 0;
                break;
 }               

    }
//textContent to display set strings within the html document, and update as the game progresses
    results.textContent = result + 'You picked '+ userguess + ' the computer chose ' + compguess;
    Player.textContent = "Player Score: " + humanScore;
    Computer.textContent = "Computer Score: " + compScore;
    Winner.textContent = a;
}
