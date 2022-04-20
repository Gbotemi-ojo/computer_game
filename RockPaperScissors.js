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
let computerScores = document.getElementById("computerScores")
let userScores = document.getElementById("userScores")
gameState.textContent;
userScores.textContent = 0
computerScores.textContent = 0


function computer(){
    let random =Math.floor( Math.random() * 3 ) + 1
    return random
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
    let choseRock = playerData.textContent = `YOU CHOSE: ROCK`
        computerConditionalStatement()
        if(computer() === 2){
            userScores.textContent = 1
        }
        else if(computer() === 3){
            computerScores.textContent =3
        }
}
function paper(){
    let chosePaper = playerData.textContent = `YOU CHOSE: PAPER`
    computerConditionalStatement()
}
function scissors(){
    let choseScissors = playerData.textContent = `YOU CHOSE: SCISSORS`
    computerConditionalStatement()
}
























