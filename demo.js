let playerPoint = 0; 
let computerPoint = 0; //set initial value for player & computer
const results = document.querySelector('#results'); //block to save each round's result
let comPoint = document.querySelector('#com .point');
let userPoint = document.querySelector('#user .point'); // score board 
const plays = Array.from(document.querySelectorAll(".rps"));
plays.forEach(play => play.addEventListener('click',round));

//--------------------------------------------------------

function round(e){ 
    let computerPlay = computer(); //random play by computer
    const playerSelection = e.target.dataset.play;         
    gameCheck(playerSelection,computerPlay); //check who win this round
    if (playerPoint === 5){ //check who get 5 wins first
        alert("You win the computer by beating 5 times!");
        resetGame(); //set the game to initial status
    }
    else if (computerPoint === 5){
        alert("You unfortunely lose to the computer...");
        resetGame();
    }         
}

function computer(){    
    const RPS = ["rock", "paper", "scissors"];
    let x = Math.floor(Math.random()*RPS.length);
    return RPS[x];    
}

function showResult(resultString){    
    let content = document.createElement('div');
    content.textContent = resultString;
    results.appendChild(content);
}

function gameCheck(playerSelection,computerPlay){
    if (playerSelection == computerPlay) {
        showResult("Tie!");
    }
    else if ((playerSelection == "rock" && computerPlay == "paper")
            ||(playerSelection == "paper" && computerPlay == "scissors")
            ||(playerSelection == "scissors" && computerPlay == "rock")){
        showResult("You lose! " + computerPlay + " beats " + playerSelection + "!");        
        ++computerPoint;
        comPoint.textContent = computerPoint;
    }
    else {
        showResult("You win! " + playerSelection + " beats " + computerPlay + "!");
        ++playerPoint;
        userPoint.textContent = playerPoint;
    }
}

function resetGame(){    
    playerPoint = 0;
    userPoint.textContent = playerPoint;
    computerPoint = 0;
    comPoint.textContent = computerPoint;
    while(results.firstChild){
        results.removeChild(results.firstChild);
    }
}

