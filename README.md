# Rock, Paper, Scissors, Lizard, Spock Javascript Game

![Javascript Game Homepage](assets/images/new-main-area.png)

# Game purpose

Welcome to the Rock, Paper, Scissors, Lizard, Spock game! This interactive web application is a fun and extended version of the classic Rock, Paper, Scissors game. It adds the elements of Lizard and Spock, making the gameplay more exciting and strategic. The game is built using HTML, CSS, and JavaScript.

The rules are as follows:

- Rock crushes Scissors
- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock

# How to play

- Open the index.html file in a web browser.
- Choose one of the options (Rock, Paper, Scissors, Lizard, Spock) by clicking on the corresponding button.
- The computer will randomly choose one of the options.
- The winner will be determined based on the game rules.
- The result will be displayed on the screen.

The website has been built using HTML and CSS, and is the final submission for the project#1 section of the Code Institute's Full Stack Developer course.

[The live website can be viewed via this link](https://tomboxhall.github.io/rock-paper-submit/).

---

# UX Design
## User Stories
### As a player of the game

- I want to easily be able to visually understand the purpose of the game.
- I want the play area to be easily recognisable, and kept simplified so as not to have any confusions about what the player needs to do.
- I want the score section to be easily recognised, so the player is able to keep track of their progress against the computer.
- I want the game mechanics to be simply, and for there to not be any bugs that prevent the game from running smoothly.

---

## Structure

The Rock, Paper, Scissors, Lizard, Spock JavaScript game follows a well-organized and modular structure to ensure clarity and maintainability. The project is divided into three main files: **index.html**, **style.css**, and **script.js**. The HTML file (index.html) serves as the entry point, providing the structural foundation for the game interface. It incorporates distinct sections for Player 1, the Computer, and the game results, creating a clean and visually appealing layout.

The styling of the game is handled by the CSS file (style.css). The styles are structured to enhance the user experience, featuring a space-themed background and clear differentiation between player and computer sections. The Player selections also have a **Hover:Grow** effect on them to visually let the player know which choice they are hovering over. 

The core functionality and game logic are encapsulated in the JavaScript file (script.js). The script is well-commented, making it easy to understand and maintain. It includes event listeners for player and computer choices, functions for displaying choices and results, score tracking, and a reset functionality. The use of functions and modular coding principles enhances readability and allows for potential future enhancements.

Overall, the structure of the Rock, Paper, Scissors, Lizard, Spock game follows best practices for web development, promoting maintainability, scalability, and ease of collaboration.

---

## Features

### 1. User Interface

The game provides a user-friendly interface with clear sections for Player 1, the Computer, and the game results. The background is a mesmerizing space-themed image to enhance the gaming experience.

![User Interface](assets/images/new-main-area.png)

Upon the player landing on the Game home page, they will be met with a visually appeasing game, the Player 1 section is on the left, the computers play area on the right, and a scoreboard at the top and a start over button at the bottom. The design was kept simple, and removed any confusion for the player as to what they have to do to participate.

### 2. Choices

Player 1's choices are presented with clickable images for Rock, Paper, Scissors, Lizard, and Spock.
Computer's choices are also displayed but hidden until Player 1 makes a selection.

![Player Choices](assets/images/choices.png)

The logic behind the Player's choices comprise of an Event listener, and a Function as follows;

![Event Listener](assets/images/event-listener.png)

This JavaScript code adds click event listeners to elements in the player1Choices array. When one of these elements is clicked, it calls the playRound function with the clicked choice as an argument. The assumption is that player1Choices contains HTML elements representing choices for a game, like buttons, and playRound handles the game logic for the selected choice.

![Selected Choices](assets/images/selected-choices.png)

These JavaScript functions work together for displaying and highlighting a player's choice in the game:

1. **showPlayerChoice** Function:
- Takes the player's choice and a display area.
- Uses generateImgElement to create and display an image of the choice in the area.

2. **showChoiceAndHighlight** Function:
- Takes an index, an array of choices, and a display area.
- Displays the selected choice and highlights it among other choices.

3. **generateImgElement** Function:
- Takes an object with image and name.
- Creates an image element with the specified properties.

In short, these functions collaborate to visually present a player's choice, including highlighting it when needed.

Image below to show the outcome of the Function once called upon;

![Working Example](assets/images/working-example-player.png)

### 3. Score Tracking
The scores for both Player 1 and the Computer are prominently displayed at the top, allowing players to keep track of their performance throughout the game.

![Score Tracking](assets/images/score-tracking.png)

![Calculate Score and Display Result](assets/images/calculate-score.png)

The JavaScript function **calculateAndDisplayResult** determines the winner of a game round between a player and a computer. Here's a simplified breakdown:

1. Parameters:
- Takes indices representing the player's and computer's choices.

2. Choice Retrieval:
- Gets the actual choices (names) made by the player and the computer.

3. Comparison and Outcome:
- Checks if the choices are the same; if yes, it's a draw.

If choices are different:

- Determines the strength of the player's choice using predefined rules.
- Checks if the player wins against the computer.
- Updates the score and displays the result message (win, lose).

In short, this function calculates and displays the result of a game round, factoring in draws, player wins, and computer wins based on their choices and predefined rules.

![Example of PLayer + Computer Choice and Score update](assets/images/score-update.png)

### 4. Real-time Results
The game dynamically updates the chosen options for both Player 1 and the Computer, providing a visual representation of the current round. The result message informs the player of the outcome, whether it's a draw, a win for Player 1, or a win for the Computer.

![Updating Score Display + Adding the Score](assets/images/add-score-message-update.png)

![Add score and message update](assets/images/add-score-message-ss.png)

These JavaScript functions are for updating and displaying scores and messages in the game:

 1. **addScore** Function:
- Takes a score element and increases its displayed score by 1.

 2. **showMessage** Function:
- Takes a message and updates the displayed message on the webpage.

In short, **addScore** manages score updates, and **showMessage** handles displaying messages in the game.

### 5. Reset Button
A "Start Over" button is available for players to reset the game. This button clears the chosen options, resets the scores, and displays a message prompting the player to make a new selection.

![Reset Button](assets/images/reset-button.png)

![Reset Button Javascript](assets/images/reset-button-script.png)

This JavaScript code sets up a reset button for the game:

1. Event Listener:
- Listens for a click on an element with the class "reset-btn."
- When clicked, it triggers the **resetGame** function.

2. **resetGame** Function:
- Calls different reset functions to clear and initialize various aspects of the game:
- **resetArea**: Clears display areas for player and computer choices.
- **resetScore**: Resets player and computer scores to zero.
- **resetMessage**: Resets the displayed message.
- **resetChoices**: Removes the "active" class from player and computer choices.

3. Reset Functions:
- **resetArea(area)**: Clears content in a specified HTML element **(area)**.
- **resetScore(scoreElement)**: Sets the score to "0."
- **resetMessage()**: Sets the displayed message to a default.
- **resetChoices(choices)**: Removes the "active" class from each choice in a provided array.

In short, clicking the reset button triggers a function that resets various game elements to their initial state.

![Game area before reset](assets/images/before-reset.png)
![Game are after reset](assets/images/new-main-area.png)

### 6. Extras

![Active Class function](assets/images/active-class.png)

This JavaScript function, **highlightSelectedChoice**, manages the visual highlighting of a selected choice among a set of choices:

1. Parameters:
- **choices**: An array of choices (presumably HTML elements).
- **index**: The index of the selected choice in the array.

2. Logic:
- Removes the "active" class from all choices to reset their styling.
- Adds the "active" class to the selected choice, visually highlighting it.

In the context of this game, when a user makes a new selection or when the game is reset, **resetChoices** is called to remove the "active" class from all choices. This ensures that none of the choices is visually highlighted. Then, when a user makes a new selection, **highlightSelectedChoice** is called to add the "active" class to the chosen choice, visually indicating the current selection.

In summary, **resetChoices** clears any existing visual highlighting from all choices, and **highlightSelectedChoice** adds the visual highlight to a specific choice. These functions work together to manage the visual state of choices in response to user interactions or game events.

---

## Technologies

- HTML for the structure of the website.
- CSS for styling of the content of the website.
- JS for creating the dynamic and interactive web page to interact with visitors and execute complex actions.
- [Codeanywhere](https://dashboard.codeanywhere.com/) Codeanywhere as the IDE to develop the website on.
- [Github](https://github.com/) Github for hosting the source code, and Github pages for deploying the live site through.
- Git, for commiting and pushing any changes to their code to the repository.
- [Chrome dev tools](https://developer.chrome.com/docs/devtools/) For testing layouts, debugging and general tweaking of the code.
- [Google Fonts](https://fonts.google.com/) Providing the fonts.
- [FontAwesome](https://fontawesome.com/) Providing the Icons.
- [CloudConvert](https://cloudconvert.com/jpg-to-webp) Converting JPG images to WEBP, for better optimisation on the website.
- Google Chrome Lighthouse - To check Accessibility.
- [Toptal](https://www.toptal.com/designers/colorfilter) For checking the Color-blind accessibility.
- [W3C HTML Markup Validator](https://validator.w3.org/) Validate the HTML code of the website.
- [W3C CSS Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) Validate the CSS of the website.
- [Favicon.ico](https://www.favicon.cc/) to generate the Favicon

---

## Automated Testing

**[W3C Jigsaw CSS](https://jigsaw.w3.org/css-validator/) CSS Validation**
- The CSS stylesheet was tested and no errors were detected.

**[W3C HTML Markup](https://validator.w3.org/) HTML Validation**
- The HTML on all pages was run through the validator and a couple of 'suggestions' were flagged, these comprised of being advsied to add a DIV or h1-h6 element to the     sections due to not having headings. However for the purpose of this project just using **<Section id=...>** works adequately as intended.

**[JSHint Javascript](https://jshint.com/) JS Validation**
- The JS was tested and a couple of uneccessary semi-colons were detected, these have now been removed and 0 errors were shown upon retesting.

![JShint Test](assets/images/jshint%20.png)

**Google Lighthouse**
- Main game page results show it passes.

![Lighthouse Screenshot](assets/images/lighthouse-test.png)

## Manual Testing of Features

| Test                                                            | Purpose                                                                                         | How to Test                                                                                                                     | What's expected to happen                                                                                                  | Result                                                        |
|-----------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Player 1 Area                                                   |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| 1. Functionality                                                | Verify that all player 1 choices are correctly selected.                                        | Check the elements with the id `player1 .available-choices .choice.`                                                            | All five player 1 choices (Rock, Paper, Scissors, Lizard, and Spock) should be present.                                    | Functionality performed as expected.                          |
| 2. Feature - Event Listener                                     | Verify that clicking on a player 1 choice triggers the `playRound function`                     | Click on each player 1 choice and observe the game behavior.                                                                    | The game should display the chosen player 1 and computer choices, calculate the result, and update the scores accordingly. | The Feature performed as expected, no bugs.                   |
|                                                                 |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| Computer Area                                                   |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| 1. Functionality                                                | Verify that all computer choices are correctly selected.                                        | Check the elements with the id `computer .available-choice .choice.`                                                            | All five computer choices (Rock, Paper, Scissors, Lizard, and Spock) should be present.                                    | Computer functionality performed as expected.                 |
|                                                                 |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| Player and Computer 'Show Area'                                 |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| 1. Functionality                                                | Verify that the selected choices are correctly displayed in the player and computer show areas. | Click on a player 1 choice and observe the display in `player1 .selected-choice .choice and computer .selected-choice .choice.` | The chosen images should be displayed in the respective show areas.                                                        | The correct images for the selection appear in the show area. |
|                                                                 |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| Player and Computer scores                                      |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| 1. Functionality                                                | Verify that the initial scores for both player 1 and the computer are set to 0.                 | Check the elements with the ids `player1-score and computer-score.`                                                             | Both scores should be initially set to 0.                                                                                  | Both scores are initially set to 0.                           |
| 2. Feature - AddScore                                           | Verify that the scores increase correctly when a player wins a round.                           | Trigger a win scenario for player 1 or the computer and observe the score updates.                                              | The corresponding score should increase by 1.                                                                              | The score increasing in increments of 1 as intended.          |
|                                                                 |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| Round Message                                                   |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| 1. Functionality                                                | Verify that the round message is initially set to "Make your Choice!".                          | Check the element with the id `round-message.`                                                                                  | The round message should be "Make your Choice!" initially.                                                                 | The round message is 'Make your Choice!' as intended.         |
| 2. Feature - Show Message                                       | Verify that the correct messages are displayed for different game outcomes.                     | Trigger different game outcomes (win, lose, draw) and observe the displayed messages.                                           | The messages should correspond to the game outcomes.                                                                       | All messages correspond to the game outcome.                  |
|                                                                 |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| Reset Button                                                    |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| 1. Functionality                                                | Verify that clicking the reset button resets the game state.                                    | Click on the reset button and observe the changes in the player and computer show areas, scores, and round message.             | The game state should be reset to its initial state.                                                                       | The game does reset to its initial state.                     |
|                                                                 |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| Reset Functions                                                 |                                                                                                 |                                                                                                                                 |                                                                                                                            |                                                               |
| Feature - Reset Area, Reset Score, Reset Message, Reset Choices | Verify that each reset function resets the respective area, score, message, or choices.         | Trigger the `resetGame` function and observe the changes in the player and computer show areas, scores, and round message.      | The game state should be reset to its initial state for each element.                                                      | The game resets to its initial state for each element.        |
---

## Accessibility Testing

### Toptal Colorfilter

This website has been tested using [Toptal Colorfilter](https://www.toptal.com/designers/colorfilter), and no accessibility issues were detected.

[Result 1](https://www.toptal.com/designers/colorfilter?orig_uri=https://tomboxhall.github.io/rock-paper-submit/&process_type=protan)
[Result 2](https://www.toptal.com/designers/colorfilter?orig_uri=https://tomboxhall.github.io/rock-paper-submit/&process_type=deutan)
[Result 3](https://www.toptal.com/designers/colorfilter?orig_uri=https://tomboxhall.github.io/rock-paper-submit/&process_type=tritan)
[Result 4](https://www.toptal.com/designers/colorfilter?orig_uri=https://tomboxhall.github.io/rock-paper-submit/&process_type=grey)

### Screen Reader

This website has been tested with [Screen Reader for Google Chrome](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn), And no issues were detected.
---

## Deployment

This project was deployed to Github pages, a step by step guide to deploy is as follows:

1. Log into [Github](https://github.com/Tomboxhall/rock-paper-submit).
2. Choose `rock-paper-submit` in the list of repositories.
3. Select `settings` in the repositories sub headings along the top.
4. In the left hand side menu, select the `pages` link within the `code and automation` section.
5. Within the branch sub-section, under Build and Deployment select `main` in the dropdown menu.
6. Select the `root` in the dropdown menu to the right.
7. Press `save`
8. Finally a message should appear stating that the website is ready to be deployed, refresh the page, and the link should be available at the top of the page.

---

## Credits

### Media (Image Sourcing)

- space-background1.webp is by Jeremy Thomas from [unsplash](https://unsplash.com/photos/blue-and-purple-galaxy-digital-wallpaper-E0AHdsENmDg).
- rock.webp is from [Clean PNG](https://www.cleanpng.com/png-rock-free-content-clip-art-cartoon-rock-cliparts-556463/).
- paper.png is from [Clean PNG](https://www.cleanpng.com/free/paper.html).
- scissors.webp is from [Clean PNG](https://www.cleanpng.com/png-icon-scissors-metal-scissors-sharp-edges-scissors-7950123/).
- lizard.webp is from [Clean PNG](https://www.cleanpng.com/png-lizard-reptile-gecko-clip-art-creative-3d-gecko-461397/).
- spock.webp is from [Clean PNG](https://www.cleanpng.com/png-leonard-nimoy-star-trek-the-motion-picture-spock-n-5883527/).

### Code

Inspiration for this project was taken from multiple other Youtube videos and Online walkthroughs, i have listed them below;
- [Hackernoon](https://hackernoon.com/how-to-create-rock-paper-scissors-spock-lizard-in-javascript-991k36hy).
- [Medium - Sakil Mahmud](https://medium.com/@sakilmahmud543/build-sheldons-chaotic-rock-paper-scissors-lizard-spock-with-nodejs-923d6cb9f5dc).
- [Competent Programming](https://www.youtube.com/watch?v=lV2BMXdsDmc&t=3653s).


The HTML and CSS framework inspiration was taken from the following website;
- [Learners Bucket](https://learnersbucket.com/tutorials/js-projects/rock-paper-scissor-lizard-spock-game-in-javascript/).

All code was edited by myself, with the help of VS Code's 'AI Agent'.

### Ackownledgments

I would like to thank the Code Institute for providing easy to understand and follow mock-up 'Love Maths' game, from this is was able to build out my own Game making sure it covered some of the main features required.

I would like to thank my Tutor, Ronan McClelland, for the useful information and feedback during our 2 sessions.

Finally would like to thank the Online Slack community, for always being there when i had issues i could not figure out on my own.

---

## Final Comments

I ran my project through the VS Code 'AI Assist' software, and asked it to give me feedback, and ways i could improve this project if i was to do it again. I have posted the responses below;

1. Error Handling: Add error handling for unexpected scenarios, such as invalid data or unexpected behavior.
2. Testing Edge Cases: Test with extreme inputs or edge cases to ensure robustness.
3. Unit Tests: Consider writing unit tests using a testing framework to automate and streamline the testing process.
4. Accessibility: Ensure the game is accessible to users with disabilities by incorporating proper ARIA attributes and keyboard navigation.

I acknowledge that these changes would improve my project, and will make sure to keep these in mind for the completion of the next Project. But overall i am happy with my Project 2, and happily accept whichever grade i receive.

---