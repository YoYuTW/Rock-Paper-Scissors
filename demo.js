const RPS = ["rock", "paper", "scissors"];

function computerPlay(){    
    let x = Math.floor(Math.random()*RPS.length);
    return RPS[x];    
}

function round(playerSelection,computerSelection){
    if (playerSelection == computerSelection) {
        return "Tie!"
    }
    else if ((playerSelection == "rock" && computerSelection == "paper")
            ||(playerSelection == "paper" && computerSelection == "scissors")
            ||(playerSelection == "scissors" && computerSelection == "rock")){
        return "You Lose! " + computerSelection + " beats " + playerSelection + "!";
    }
    else {
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    }
}

function game(){
    let results = [];
    for (i = 1; i <= 5; i++){
        let playerSelection = prompt("Your play is?").toLowerCase();
        if (RPS.indexOf(playerSelection) == -1 ){
            alert("Please input only 'rock', 'paper', or 'scissors'.");
            i -= 1;
            continue;
        }        
        let computerSelection = computerPlay();
        let result = round(playerSelection,computerSelection);
        console.log(result);
        results.push(result);
    }
    console.log(results);
}

console.log(game());