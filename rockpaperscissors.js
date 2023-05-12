const actions = ['rock', 'paper', 'scissors']
let pScore = 0
let cScore = 0

function getComputerChoice(){
    return actions[Math.floor(Math.random()*3)];
}

function getResult(playerSelection, computerSelection){
    const p = playerSelection.toLowerCase();
    const c = computerSelection.toLowerCase();

    if(p === c)
        return 1
    else if((p === actions[0] && c === actions[2]) || (p === actions[1] && c === actions[0])
        || (p === actions[2] && c === actions[1])) return 2
    else return 0
}

function getResultMessage(result, playerSelection, computerSelection){
    if(result === 0)
    return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`+
        ` beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    else if(result === 1)
        return 'It\'s a tie!'
    else
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`+
            ` beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
}

function incrementScore(result){
    if(result === 0) cScore++
    else if(result === 2) pScore++
}

function game(){

    for(let i=0; i<5; i++){
        let computerChoice = getComputerChoice()
        let playerChoice = prompt('What do you play?')
        let result = getResult(playerChoice, computerChoice)
        incrementScore(result)
        console.log(getResultMessage(result, playerChoice, computerChoice))
    }

    if(pScore > cScore) console.log('Player wins!')
    else if(cScore > pScore) console.log('Computer wins!')
    else console.log('It\'s a tie')
}

game()