let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const playgame = (userChoice) => {
    console.log("user choice is", userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice is", compChoice);

    if (userChoice === compChoice) {
        console.log("game was draw");
        msg.innerText="Draw"
        msg.style.backgroundColor="black"
    }
    else if (
        (userChoice === "stone" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "stone") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        console.log("You wins");
        userscore++;
        userscorepara.innerText=userscore
        msg.innerText="You wins";
        msg.style.backgroundColor="green"

    }
    else{
        console.log("Computer wins")
        compscore++;
        compscorepara.innerText=compscore
         msg.innerText="You lose";
         msg.style.backgroundColor="red"
    }
}
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            // console.log("choice is clicked")
            const userChoice = choice.getAttribute("id")
            playgame(userChoice);
        })
    })
