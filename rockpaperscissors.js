const actions = ["rock", "paper", "scissors"];
let pScore = 0;
let cScore = 0;

function getComputerChoice() {
  return actions[Math.floor(Math.random() * 3)];
}

function getResult(playerSelection, computerSelection) {
  const p = playerSelection.toLowerCase();
  const c = computerSelection.toLowerCase();

  if (p === c) return 1;
  else if (
    (p === actions[0] && c === actions[2]) ||
    (p === actions[1] && c === actions[0]) ||
    (p === actions[2] && c === actions[1])
  )
    return 2;
  else return 0;
}

function getResultMessage(result, playerSelection, computerSelection) {
  if (result === 0)
    return (
      `You Lose! ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }` +
      ` beats ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      }`
    );
  else if (result === 1) return "It's a tie!";
  else
    return (
      `You Win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      }` +
      ` beats ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`
    );
}

function incrementScore(result) {
  if (result === 0) cScore++;
  else if (result === 2) pScore++;
}

function getScoreMessageHTML() {
  return `${pScore} - ${cScore}`;
}

function getFinalResult() {
  resetButton.style.visibility = "visible";
  if (pScore > cScore) return "Player wins!";
  else if (cScore > pScore) return "Computer wins!";
  else return "⚔ It's a tie";
}

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const resetButton = document.getElementById("reset");
const buttons = document.querySelectorAll(".play-button");
const buttonsArray = [...buttons];
buttonsArray.forEach((item) => item.addEventListener("click", buttonClicked));

function resetGame() {
  pScore = 0;
  cScore = 0;
  scoreDiv.innerText = getScoreMessageHTML();
  resultDiv.innerText = "Start Playing!";
  resetButton.style.visibility = "hidden";
}

function buttonClicked(e) {
  if (e.currentTarget.id === "reset") {
    resetGame();
    return;
  } else if (pScore >= 5 || cScore >= 5) {
    return;
  }
  let computerChoice = getComputerChoice();
  let result = getResult(e.currentTarget.id, computerChoice);
  incrementScore(result);
  resultDiv.innerText = getResultMessage(
    result,
    e.currentTarget.id,
    computerChoice
  );
  if (pScore < 5 && cScore < 5) scoreDiv.innerHTML = getScoreMessageHTML();
  else scoreDiv.innerHTML = getFinalResult();
}
