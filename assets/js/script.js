// Order of the chocies //
let arr = [
    { image: "rock.png", name: "Rock" },
    { image: "paper.png", name: "Paper" },
    { image: "scissors.png", name: "Scissors" },
    { image: "lizard.png", name: "Lizard" },
    { image: "spock.png", name: "Spock" },
];

// The rules who who wins //
let rule = {
    Rock: ["Lizard", "Scissors"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"],
}

let imageFolderPath = "assets";

// All of Player 1's choices//
let player1Choices = document.querySelectorAll("#player1 .available-choices .choices");

//All of the Computer's choices//
let computerChoices = document.querySelectorAll("#computer .available-choices .choices");

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
    choice.addEventListener("click", () => playRound(chocie));
});

// Play Round function of the game //
let playRound = (player1Choice) => {
    let player1Index = player1Choice.getAttribute("data-index");
    let computerIndex = Math.floor(Math.random() * arr.length);

    showChoiceAndHighlight(player1Index, player1Choices, playerShowArea);
    showChoiceAndHighlight(computerIndex, computerChoices, computerShowArea);

    calculateAndDisplayResult(player1Index, computerIndex);
};


