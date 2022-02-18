function computerPlay() {
    // Random number between 0 and 2
    const compSelection = Math.floor(Math.random()*3);
    
    switch (compSelection){
        case 0:
            return("Rock");
        case 1:
            return("Paper");
        case 2:
            return("Scissors")
        default:
            console.log("error");
    }
}

function playRound(playerSelection, computerPlay) {
    if (playerSelection == "Rock") {
        if (computerPlay == "Scissors") {
            return 1;
        } else if (computerPlay == "Paper") {
            return 0;
        }
    } else if (playerSelection == "Paper") {
        if (computerPlay == "Rock"){
            return 1;
        } else if (computerPlay == "Scissors") {
            return 0;
        }        
    } else if (playerSelection == "Scissors") {
        if (computerPlay == "Paper") {
            return 1;
        } else if (computerPlay == "Rock") {
            return 0;
        }
    }
    // If game was a tie
    return -1;
    
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

// Game
let compWins = 0;
let playerWins = 0;
const playerScore = document.getElementById('playerScore')
const compScore = document.getElementById('compScore')
const playerChoice = document.getElementById('playerChoice')
const compChoice = document.getElementById('compChoice')
const outcomeMsg = document.getElementById('outcomeMsg')

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissors');
const playerOptions = [rockBtn,paperBtn,scissorBtn];

playerOptions.forEach(option => option.addEventListener('click', function() {
    let playerSelection = option.innerText;
    let computerSelection = computerPlay();
    console.log(playerSelection)
    let result = playRound(playerSelection,computerSelection)
    switch (result) {
        case -1:
            outcomeMsg.textContent = "Tie!"
            break;
        case 0:
            outcomeMsg.textContent = "You Lose!"
            compWins++;
            break;
        case 1:
            outcomeMsg.textContent = "You Win!"
            playerWins++;
            break;
    }
    playerChoice.textContent = `Player chooses: ${playerSelection}`
    compChoice.textContent = `Computer chooses: ${computerSelection}`
    playerScore.textContent = `Player Wins: ${playerWins}`
    compScore.textContent = `Computer Wins: ${compWins}`
}));    





