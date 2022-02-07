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
    if (playerSelection == "rock") {
        if (computerPlay == "scissors") {
            return 1;
        } else if (computerPlay == "paper") {
            return 0;
        }
    } else if (playerSelection == "paper") {
        if (computerPlay == "rock"){
            return 1;
        } else if (computerPlay == "scissors") {
            return 0;
        }        
    } else if (playerSelection == "scissors") {
        if (computerPlay == "paper") {
            return 1;
        } else if (computerPlay == "rock") {
            return 0;
        }
    }
    // If game was a tie
    return -1;
    
}

function playerInput(){
    const options = ["rock", "paper", "scissors"];

    let playerSelection = ""
    while (options.includes(playerSelection) == false) {
        playerSelection = (prompt("Enter Rock, Paper or Scissors")).toLowerCase();
    }
    return playerSelection;
}

function gameOLD() {
    // OLD CODE FOR Bo5
    let playerWins = 0;
    let compWins = 0;

    while (playerWins < 3 && compWins < 3) {
        console.log("Player Wins = " + playerWins);
        console.log("Computer Wins = " + compWins);
        let playerSelection = playerInput();
        let computerSelection = computerPlay();
        let outcome = playRound(playerSelection,computerSelection);
        
        console.log("Player: " + playerSelection + " | Computer: " + computerSelection);
        switch (outcome) {
            case -1:
                console.log("Tie");
                break;
            case 0:
                console.log("You Lose")
                compWins++;
                break;
            case 1:
                console.log("You Win")
                playerWins++;
                break;
        }
        console.log("\n");
    }

    console.log("Player Wins = " + playerWins);
    console.log("Computer Wins = " + compWins);
    if (playerWins == 3) {
        console.log("Player Wins!")
    } else {
        console.log("Computer Wins!")
    }
}

function game() {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissors');
    const playerOptions = [rockBtn,paperBtn,scissorBtn];

    playerOptions.forEach(option => option.addEventListener('click', function() {
        let playerSelection = option.innerText;
        let computerSelection = computerPlay();
        console.log(playerSelection)
    }));
    

    
}

game();

