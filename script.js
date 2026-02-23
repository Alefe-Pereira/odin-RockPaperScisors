let playerScore = 0;
let computerScore = 0;

function getComputerChoice() 
{
    let computerChoice = Math.random();

        if (computerChoice < 0.34) 
            {    
            computerChoice = "Rock";
            } 
        
        else if (computerChoice <= 0.67) 
            {
            computerChoice = "Paper";
            } 
        
        else 
            {
            computerChoice = "Scissors";
            }

    console.log("Computer chose:", computerChoice);
    return computerChoice;
}

    
        const playerChoice = document.querySelectorAll("button");

        playerChoice.forEach(button => 
        {
            button.addEventListener("click", () => { playRound(button.dataset.choice, getComputerChoice()) });
        });
        
        
        function playRound(playerChoice, computerChoice) 
        
        {

            if (playerChoice === computerChoice) 

        {

            document.getElementById("result").innerHTML = "It's a tie!";
            console.log("Empate!");
            playerScore++;
            computerScore++;
        } 
        
        else if 
        (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")

        ) 
        
        {
            document.getElementById("result").innerHTML = `You win! ${playerChoice} beats ${computerChoice}.`;
            console.log("You win!");
            playerScore++;

        } 
        
        else 
            
        {

            document.getElementById("result").innerHTML = `Computer wins! ${computerChoice} beats ${playerChoice}.`;
            console.log("Computer wins!");
            computerScore++;
        }

            document.getElementById("score").innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
            checkWinner();
        }
    
        function checkWinner() 
        
        {
            if (playerScore === 5) 
                
                {

                document.getElementById("result").innerHTML = "Congratulations! You won the game!";
                playerScore = 0;
                computerScore = 0;

                } 
            
            else if (computerScore === 5) 
                
                {

                document.getElementById("result").innerHTML = "Computer wins the game! Better luck next time!";
                playerScore = 0;
                computerScore = 0;

                }
        };
    