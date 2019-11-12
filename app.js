var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    else return "Scissors";
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)} . You win!` ;  
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow') , 400)
}


function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)} . You lose!` ;  
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow') , 400)
}

function draw(user, computer){
    result_p.innerHTML = `${convertToWord(computer)} equals ${convertToWord(user)} . Its a draw!` ;      
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow') , 400)
}

function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',() => game("r"));

    paper_div.addEventListener('click',() => game("p"));

    scissors_div.addEventListener('click',() => game("s"))

};

main();

