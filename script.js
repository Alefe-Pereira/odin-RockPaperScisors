let winners = []
const choices = ["Rock", "Paper", "Scissors"];

function resetGame(){
    winners = [];
    updateScore();
    document.querySelector("#playerChoiceDisplay").textContent = "Player's Move:";
    document.querySelector("#computerChoiceDisplay").textContent = "Computer's Move:";
    document.querySelector("#result").textContent = "Result will be displayed here.";
    document.querySelector(".reset").style.display = "none";
}

function startGame()
    {
        const playerChoice = document.querySelectorAll("img[data-choice]");

            playerChoice.forEach(button => 
            {
                button.addEventListener("click", () => { playRound(button.dataset.choice) });
            });
    }

function getComputerChoice() 
    {
        return choices[Math.floor(Math.random() * choices.length)];
    }
        
function playRound(playerChoice) {


   let wins = checkWins();
    if (wins >= 5){
        return;
    }
    
        const computerChoice = getComputerChoice();

        const winner = checkWinner(playerChoice, computerChoice);
        winners.push(winner);

        updateScore();
        displayChoices(playerChoice, computerChoice);
        wins = checkWins();

        if (wins >= 5) {
            displayEnd();
        }
    }   

    function displayEnd() {
        let playerWins = winners.filter(winner => winner === "Player").length;
        if (playerWins == 5) {
            document.querySelector("#result").textContent = "Congratulations! You won the game!";
        }
        else {
            document.querySelector("#result").textContent = "Game Over! The computer won the game!";
        }
        document.querySelector(".reset").style.display = "flex";
        
    }
    
    function displayChoices(playerChoice, computerChoice) {
        document.querySelectorAll(".computerImgs img").forEach(img => {
        img.classList.remove("active");
    });

    // adiciona active na imagem escolhida pelo computador
    document.querySelector(`.computerImgs .${computerChoice}`).classList.add("active");

    document.querySelector("#playerChoiceDisplay").textContent = `Player chose: ${playerChoice}`;
    document.querySelector("#computerChoiceDisplay").textContent = `Computer chose: ${computerChoice}`;
    document.querySelector("#result").textContent = `Result: ${checkWinner(playerChoice, computerChoice)}`;
    
    setTimeout(() => {
        document.querySelector(`.computerImgs .${computerChoice}`).classList.remove("active");
        }, 700);

        
}
    
    
function checkWins(){
    const playerWins = winners.filter(winner => winner === "Player").length;
    const computerWins = winners.filter(winner => winner === "Computer").length;
    return Math.max(playerWins, computerWins);
}
    
function checkWinner(playerChoice, computerChoice) 
        
        {
            if
            (
                (playerChoice == "Rock" && computerChoice == "Scissors") ||
                (playerChoice == "Paper" && computerChoice == "Rock") ||
                (playerChoice == "Scissors" && computerChoice == "Paper")
            )

            {
                return "Player";
            }

            else if (computerChoice ==  playerChoice)
            {
            return "Tie";
            }
            else {return "Computer";}
        }

function updateScore() 
        {
            const playerWins = winners.filter(winner => winner === "Player").length;
            const computerWins = winners.filter(winner => winner === "Computer").length;
            document.querySelector("#score").textContent = `Player: ${playerWins} | Computer: ${computerWins}`; 
        }
 