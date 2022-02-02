function computerPlay() {
    // Random number between 0 and 2
    const compSelection = Math.floor(Math.random()*3);
    
    switch (compSelection){
        case 0:
            return("rock");
            break;
        case 1:
            return("paper");
            break;
        case 2:
            return("scissors")
            break;
        default:
            console.log("error");
    }
}

function playRound(playerSelection, computerPlay) {
    let playerChoice = playerSelection.toLowerCase();
    console.log(playerChoice,computerPlay)
    if (playerChoice == "rock") {
        if (computerPlay == "scissors") {
            return 1;
        } else if (computerPlay == "paper") {
            return 0;
        }
    } else if (playerChoice == "paper") {
        if (computerPlay == "rock"){
            return 1;
        } else if (computerPlay == "scissors") {
            return 0;
        }        
    } else if (playerChoice == "scissors") {
        if (computerPlay == "paper") {
            return 1;
        } else if (computerPlay == "rock") {
            return 0;
        }
    }
    // If game was a tie
    return -1;
    
}

let playerSelection = prompt("Enter Rock, Paper or Scissors");
const computerSelection = computerPlay();
console.log(playerSelection); 
playRound(playerSelection,computerSelection);