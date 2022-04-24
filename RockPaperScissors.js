//ROCK PAPER SCISSORS
//GENERAL IDEA1
//===============================
//player clicks a button to choose either rock,paper or scissors
//onclick of the button would log out what was chosen on the screen
//onclick of the button would automatically play for the computer
//an if else statement to compare the users input and the computer input
//paper beats rock
//scissors beats paper
//rock beats scissors 
//COMPUTER IDEA
//================================
//The computer would use the Math.random() function to randomly make a choice
//There would be an extensive use of functions,so i must be extra careful
//the game would be a 5 round match,therefore i would loop through the game 5 times,i assume this should be the last step after
//i've got everything working
// a score count element to keep track of the scores
//the player with the highest number wins
//an if else statement to check for the winner
//log out message to congratulate the user or worse,the computer!


let playerData = document.getElementById("playerData")
let computerData = document.getElementById("computerData")
let gameState = document.getElementById("winOrLose")
let userScores = document.getElementById("userScores")
let computerScores = document.getElementById("computerScores")
gameState.textContent;
let score1 = 0
let score2 = 0


function computer(){
    return Math.floor( Math.random() * 3 ) + 1
}
function endgame(){
    if (score1 + score2 === 5){
        score1 = 0
        score2 = 0
    }
}
function computerConditionalStatement(){
    if (computer() === 1){
        computerData.textContent = `COMPUTER CHOSE: ROCK`
    }
    else if(computer() === 2){
        computerData.textContent = `COMPUTER CHOSE: PAPER`
    }
    else{
        computerData.textContent = `COMPUTER CHOSE: SCISSORS`
    }
}
function rock(){
    computerConditionalStatement()
    let choseRock = playerData.textContent = `YOU CHOSE: ROCK`
        if(computerData.textContent === `COMPUTER CHOSE: ROCK` ){
          score1 +=0
          score2 +=0
          userScores.textContent = `YOUR SCORE: ${score1}`
           computerScores.textContent =  `COMPUTER SCORE: ${score2}` 
           gameState.textContent = "IT'S A TIE,YOU BOTH CHOSE ROCK"
        }
        else if(computerData.textContent === `COMPUTER CHOSE: PAPER`){
          score2 += 1
          score1 += 0
          userScores.textContent = `YOUR SCORE: ${score1}`
          computerScores.textContent = `COMPUTER SCORE: ${score2}`
          gameState.textContent = "COMPUTER WINS THIS ROUND"
        }
        else if (computerData.textContent = `COMPUTER CHOSE: SCISSORS`){
            score1 +=1
            score2 +=0
            userScores.textContent = `YOUR SCORE: ${score1}`
            computerScores.textContent = `COMPUTER SCORE: ${score2}`
            gameState.textContent = "YOU WIN THIS ROUND!"
        }
        endgame()
}
function paper(){
    computerConditionalStatement()
    let chosePaper = playerData.textContent = `YOU CHOSE: PAPER`
    if(computerData.textContent === `COMPUTER CHOSE: ROCK` ){
        score1 +=1
        score2 +=0
        userScores.textContent =`YOUR SCORE: ${score1}`
         computerScores.textContent = `COMPUTER SCORE: ${score2}` 
         gameState.textContent = "YOU WIN THIS ROUND!"
      }
      else if(computerData.textContent === `COMPUTER CHOSE: PAPER`){
        score2 += 0
        score1 += 0
        userScores.textContent = `YOUR SCORE: ${score1}`
        computerScores.textContent = `COMPUTER SCORE: ${score2}`
        gameState.textContent = "IT'S A TIE, YOU BOTH CHOSE PAPER"

      }
      else if (computerData.textContent = `COMPUTER CHOSE: SCISSORS`){
          score1 +=0
          score2 +=1
          userScores.textContent = `YOUR SCORE: ${score1}`
          computerScores.textContent = `COMPUTER SCORE: ${score2}`
          gameState.textContent = "COMPUTER WINS THIS ROUND"
      }
      endgame()
}

function scissors(){
    computerConditionalStatement()
    let choseScissors = playerData.textContent = `YOU CHOSE: SCISSORS`
    if(computerData.textContent === `COMPUTER CHOSE: ROCK` ){
        score1 +=0
        score2 +=1
        userScores.textContent = `YOUR SCORE: ${score1}`
         computerScores.textContent = `COMPUTER SCORE: ${score2}`
         gameState.textContent = "COMPUTER WINS THIS ROUND"
      }
      else if(computerData.textContent === `COMPUTER CHOSE: PAPER`){
        score2 += 0
        score1 += 1
        userScores.textContent = `YOUR SCORE: ${score1}`
        computerScores.textContent = `COMPUTER SCORE: ${score2}`
        gameState.textContent = "YOU WIN THIS ROUND!"
      }
      else if (computerData.textContent = `COMPUTER CHOSE: SCISSORS`){
          score1 +=0
          score2 +=0
          userScores.textContent = `YOUR SCORE: ${score1}`
          computerScores.textContent = `COMPUTER SCORE: ${score2}`
          gameState.textContent = "IT'S A TIE,YOU BOTH CHOSE SCISSORS"

      }
      endgame()
}












