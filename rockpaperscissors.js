const actions = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    return actions[Math.floor(Math.random()*3)];
}