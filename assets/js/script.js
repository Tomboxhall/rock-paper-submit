// Order of the chocies //
let options = [
    { image: "rock.png", name: "Rock" },
    { image: "paper.png", name: "Paper" },
    { image: "scissors.png", name: "Scissors" },
    { image: "lizard.png", name: "Lizard" },
    { image: "spock.png", name: "Spock" },
];

// The rules who who wins //
let rules = {
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
let computerOptions = document.querySelectorAll("#computer .available-choices .choices");

// Where the players chosen choice will show //
let playerShowArea = document.querySelector("#player1 .selected-choice .choice");

// Where the computers chosen choice will show //
let computerShowArea = document.querySelector("#computer .selected-choice .choice");

