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

let playerSelection = prompt("Enter Rock, Paper or Scissors");
console.log(playerSelection); 
console.log(computerPlay());