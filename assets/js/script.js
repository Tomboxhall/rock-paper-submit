let options = [
    { image: "rock.png", name: "Rock" },
    { image: "paper.png", name: "Paper" },
    { image: "scissors.png", name: "Scissors" },
    { image: "lizard.png", name: "Lizard" },
    { image: "spock.png", name: "Spock" },
];

let rules = {
    Rock: ["Lizard", "Scissors"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"],
}

