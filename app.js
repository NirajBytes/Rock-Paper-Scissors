let userscore = 0;
let CompScore = 0;
const msg=document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");


//to generate the computer's choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
}

//to evaluate draw condition
const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

//
const showWinner =(userWin,userChoice,comChoice)=>{

    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        CompScore++;
        compScorePara.innerText=CompScore;
        msg.innerText=`You Lose! Computer's ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

//actual logic
const playGame = (userChoice) => {
    console.log("userchoice is ", userChoice);
    //computer genrates value
    const comChoice = genCompChoice();

    console.log("Comp choice = ", comChoice);

    if (userChoice === comChoice) {
        drawGame();
    }

    else {
        let userWin = true;

        if (userChoice === "rock") {
            //scissors / paper will computer choose
            userWin = comChoice === "paper" ? false : true;
        }

        else if (userChoice === "paper") {
            //rock  / scissor
            userWin = comChoice === "scissor" ? false : true;
        }

        else {
            //rock / paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin ,userChoice,comChoice);
    }

};

//userInput
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})