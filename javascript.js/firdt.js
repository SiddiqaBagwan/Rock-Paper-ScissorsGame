let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_scorePara = document.querySelector("#user_score");
const comp_scorePara = document.querySelector("#comp_score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];


};
const drawGame = () => {
    console.log("The game was draw.") ;
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "rgb(18, 18, 46)" ;
};

const showWinner = (userWin , userChoice , compChoice) => {
    const userElement = document.getElementById(userChoice);
        const compElement = document.getElementById(compChoice);
    
    if (userWin) {
        user_score++;
        user_scorePara.innerText = user_score ;
        console.log("you win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green" ;

        userElement.classList.add("winner-glow");
        compElement.classList.add("loser-glow");
    }
        
    else {
        comp_score++;
        comp_scorePara.innerText = comp_score ;
        console.log("you lose");
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red" ;

        compElement.classList.add("winner-glow");
        userElement.classList.add("loser-glow");
    }

    // Remove glow after 1 second
    setTimeout(() => {
        userElement.classList.remove("winner-glow", "loser-glow");
        compElement.classList.remove("winner-glow", "loser-glow");
    }, 1000);

    

};
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate Computer choice
    const compChoice = genCompChoice () ;
    console.log("comp choice =", compChoice);
    
    if(userChoice == compChoice) {
        drawGame();

    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true ;
        }
        else {
            userWin = compChoice === "rock" ? false : true ;

        }
        showWinner(userWin ,userChoice , compChoice) ;

    }

};

choices.forEach((choice) => {
    
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice) ;

    });
});