New game:
    -Set number of guesses remaining to 10 -
    Randomly select a word from array of choices

Confirm new game:
    -Ask
if they want to play again
    -
    If yes, newGame -
    Else, exit


Round / guess letter:
    -If guesses > 0 -
    Ask the user to guess a letter -
    Expose letter in currentWord,
    if used
    -
    If word is completely exposed:
    -tell user they win -
    confirm new game -
    Else -
    Decrement guesses by 1 -
    Next round / guess letter -
    Else
confirm new game





function Word(value) {
    this.letters = [];
    //display word, loop through word if letter is exposed show letter if not show _

    for (var l = 0; l < value.length; l++) {
        this.letters.push(new Letter(value[l]));
    }

    this.exposeLetter = function(letter) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].exposeIfMatches(letter);
        }
    }
    this.isExposed = function() {
        for (var i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].exposed) {
                return false;
            }
        }
        return true;
    }
}

===
=== === === === === ===

function Letter(character) {
    this.exposed = false;
    this.character = character;
    this.exposedIfMatches = function(letter) {
        if (this.character === letter) {
            this.exposed = true;
        }
    }
}

===
=== === === === === ===

var numGuesses;
var wordChoices = ["", "", "", ""];
var currentWord;


function guessLetter() {
    if (numGuesses > 0) {
        inquirier.prompt([
            {
                name: "letter"
                message: "Guess a letter: ",
            }
        ]).then(function(userInput) {
            currentWord.exposeLetter(userInput.letter);
            if (currentWord.isExposed()) {
                //user won
                //confirm next game
            }
            else {
                numGuesses--;
                guessLetter();
            }
        });

    }
    else {
        //ask user if they want to play again
        //if yes, newGame();
    }
}

function newGame() {
    numGuesses = 10;
    currentWord = new Word(wordChoices[0]); //need logic for random not at 0
    guessLetter();
}

newGame();
