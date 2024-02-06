// Order of the chocies //
let arr = [
    { image: "rock.webp", name: "Rock" },
    { image: "paper.png", name: "Paper" },
    { image: "scissors.webp", name: "Scissors" },
    { image: "lizard.webp", name: "Lizard" },
    { image: "spock.webp", name: "Spock" },
  ];

// The rules who who wins //
let rule = {
    Rock: ["Lizard", "Scissors"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"],
};

let imageFolderPath = "/assets/images";

// All of Player 1's choices//
let player1Choices = document.querySelectorAll("#player1 .available-choices .choice");

//All of the Computer's choices//
let computerChoices = document.querySelectorAll("#computer .available-choices .choice");

// Where the players chosen choice will show //
let playerShowArea = document.querySelector("#player1 .selected-choice .choice");

// Where the computers chosen choice will show //
let computerShowArea = document.querySelector("#computer .selected-choice .choice");

// Player 1 and Computer scores //
let player1Score = document.querySelector("#player1-score");
let computerScore = document.querySelector("#computer-score");

// Where the message will be shown //
let roundMessage = document.querySelector("#round-message");

// Event listeners for the Player 1 choices //
player1Choices.forEach((choice) => {
    choice.addEventListener("click", () => playRound(choice));
  });

// Play Round function of the game //
let playRound = (player1Choice) => {
    let player1Index = player1Choice.getAttribute("data-index");
    let computerIndex = Math.floor(Math.random() * arr.length);
  
    showChoiceAndHighlight(player1Index, player1Choices, playerShowArea);
    showChoiceAndHighlight(computerIndex, computerChoices, computerShowArea);
  
    calculateAndDisplayResult(player1Index, computerIndex);
  };

// Players selected choice //
let showPlayerChoice = (choice, showArea) => {
    let imgElement = generateImgElement(choice);
    showArea.innerHTML = "";
    showArea.appendChild(imgElement);
  };

  let showChoiceAndHighlight = (index, choices, showArea) => {
    let selectedChoice = arr[index];
    showPlayerChoice(selectedChoice, showArea);
    highlightSelectedChoice(choices, index);
  };

// Show Players choice Image //
let generateImgElement = ({ image, name }) => {
    let imgElement = document.createElement("img");
    imgElement.src = `${imageFolderPath}/${image}`;
    imgElement.alt = name;
    imgElement.title = name;
    return imgElement;
  };

// Add and remove active class //
let highlightSelectedChoice = (choices, index) => {
    choices.forEach((choice) => choice.classList.remove("active"));
    choices[index].classList.add("active");
  };
  

// Display, and calculate the results //
let calculateAndDisplayResult = (player1Index, computerIndex) => {
    let player1Choice = arr[player1Index].name;
    let computerChoice = arr[computerIndex].name;
  
    if (player1Choice === computerChoice) {
      showMessage("Uh oh, it's a draw!");
    } else {
      let player1Strength = rule[player1Choice];
      if (player1Strength.includes(computerChoice)) {
        addScore(player1Score);
        showMessage("Player 1 wins this round!");
      } else {
        addScore(computerScore);
        showMessage("Computer wins this round!");
      }
    }
  };

// Add Score //
let addScore = (scoreElement) => {
    scoreElement.textContent = String(Number(scoreElement.textContent) + 1);
  };

  let showMessage = (msg) => {
    roundMessage.innerHTML = msg;
  };

// Reset Button //
document.querySelector(".reset-btn").addEventListener("click", resetGame);

function resetGame() {
    resetArea(playerShowArea);
    resetArea(computerShowArea);
    resetScore(player1Score);
    resetScore(computerScore);
    resetMessage();
    resetChoices(player1Choices);
    resetChoices(computerChoices);
  };

  function resetArea(area) {
    area.innerHTML = "";
  };

  function resetScore(scoreElement) {
    scoreElement.textContent = "0";
  };

  function resetMessage() {
    roundMessage.innerHTML = "Choose your option";
  };

  function resetChoices(choices) {
    choices.forEach((choice) => choice.classList.remove("active"));
  };


