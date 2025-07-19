
let options = document.querySelectorAll(".option");

let user = 0;
let comp = 0;
let userChoice = "";
let compChoice = "";

// let rockImg = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Raised%20Fist%20Light%20Skin%20Tone.png";
// let paperImg = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Hand%20with%20Fingers%20Splayed%20Light%20Skin%20Tone.png";
// let scissorsImg = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Victory%20Hand%20Light%20Skin%20Tone.png";

options.forEach((option) => {
    option.addEventListener("click", () => {
        userChoice = option.title;
        play();
    })
});


const updateScoreBoard = () => {
    const box1 = document.getElementById("userScoreBoard");
    const box2 = document.getElementById("compScoreBoard");

    if(user === comp){
        document.querySelector("#compWinning").classList.add("opacity-0");
        document.querySelector("#userWinning").classList.add("opacity-0");
    }
    else if (user < comp) {
        box1.style.transform = "translateY(68px)";
        box2.style.transform = "translateY(-68px)";
        document.querySelector("#compWinning").classList.remove("opacity-0");
        document.querySelector("#userWinning").classList.add("opacity-0");
    } 
    else if (user > comp) {
        box1.style.transform = "translateY(0)";
        box2.style.transform = "translateY(0)";
        document.querySelector("#userWinning").classList.remove("opacity-0");
        document.querySelector("#compWinning").classList.add("opacity-0");
    }
};

const genComputerChoice = () => {
    let optionsAva = ["Rock", "Paper", "Scissors"];
    return compChoice = optionsAva[Math.floor(Math.random() * 3)];
}
const updateUserScore = () => {
    user = user + 1;
    document.querySelector("#userScore").innerHTML = user;
    document.querySelector("#message").classList.add("bg-emerald-100");
    document.querySelector("#message").classList.remove("bg-red-100");
    updateScoreBoard();
};
const updateCompScore = () => {
    comp = comp + 1;
    document.querySelector("#compScore").innerHTML = comp;
    document.querySelector("#message").classList.remove("bg-emerald-100");
    document.querySelector("#message").classList.add("bg-red-100");
    updateScoreBoard();
};

const play = () => {
    let computerChoice = genComputerChoice();

    document.querySelector("#message").innerHTML = `You played <strong>${userChoice}</strong> and computer played <strong>${compChoice}</strong>`;

    if(userChoice === computerChoice){
        document.querySelector("#message").classList.remove("bg-red-100");
        document.querySelector("#message").classList.remove("bg-emerald-100");
    }
    else if(userChoice === "Paper"){
        if(computerChoice === "Rock"){
            updateUserScore();
        }
        else{
            updateCompScore();
        }
    }
    else if(userChoice === "Rock"){
        if(computerChoice === "Paper"){
            updateCompScore();
        }
        else{
            updateUserScore();
        }
    }
    else if(userChoice === "Scissors"){
        if(computerChoice === "Paper"){
            updateUserScore();
        }
        else{
            updateCompScore();
        }
    }
};