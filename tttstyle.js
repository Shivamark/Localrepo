let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

/* Important Logic */

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       // console.log("box was clicked");
        
        if (turnO === true){
            box.innerText = 'O';
            turnO = false;
        }else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
})

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns){
              

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
               // console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

 const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
 }

  const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
 }

 const resetGame = () => {
    turnO = true;
    enableBoxes ();
    msgContainer.classList.add("hide");
 }

 newGameBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click", resetGame);

 /* *****************    Rock Paper Scissor section starts ************************************************************/

 let userScore = 0;
 let compScore = 0;

 const choices = document.querySelectorAll(".choice");
 const msgRps = document.querySelector("#msgrps");

 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

 
  const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
 }

 const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
    //Draw Game
    drawGame();
 } else {
    let userWin = true;

    if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;        // another way to write if else statement in tertiary form
    }else if (userChoice === "paper") {
        // rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showrpsWinner(userWin, userChoice, compChoice);
 }
 };


 choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);        
    });
 });

  const showrpsWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msgRps.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msgRps.style.backgroundColor = "green";        
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msgRps.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msgRps.style.backgroundColor = "red";
    }
 };

 
 const drawGame = () => {
    msgRps.innerText = "Game was Draw. Play again.";
    msgRps.style.backgroundColor = "#191913";
 };

/* *****************    Rock Paper Scissor section ends ************************************************************/

