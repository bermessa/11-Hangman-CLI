var inquirer = require("inquirer");
var Word = require("./word.js");

function gameStart() {
    inquirer.prompt([
        {
            type: "list",
            name: "playGame",
            message: "Would you like to play a new game of hangman?",
            choices: ["Yes", "No"]
    }
    ]).then(function(user) {

        if (user.playGame === "Yes") {
            console.log("Alright, let's get started!");
            newGame();

        }

        else {
            console.log("Ok, maybe another time...");
        }

    });
}

gameStart();



var wordChoices = ["apple", "banana", "orange", "grape", "strawberry"];
var currentWord;
var numGuesses;


function newGame() {
    numGuesses = 10;
    currentWord = new Word(wordChoices[Math.floor((Math.random() * wordChoices.length))]);

    guessLetter();
}

function guessLetter() {

    console.log(currentWord.displayWord());
    console.log(numGuesses);


    if (numGuesses > 0) {
        inquirer.prompt([
                {
                    name: "letter",
                    message: "Guess a letter: "
            }
        ])
            .then(function(userInput) {
                currentWord.exposeLetter(userInput.letter);
                if (currentWord.isExposed()) {
                    // user won
                    console.log("YOU WON!");
                    // confirm next game
                    newGame();

                }
                else {
                    numGuesses--;
                    guessLetter();
                }
            });
    }
    else {
        console.log("===================");
        console.log("No more guesses.... Game over.");
        gameStart();
    }
}
