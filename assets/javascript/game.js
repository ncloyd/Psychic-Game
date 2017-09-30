// variables to hold the number of wins, losses, and guesses remaining

var wins = 0;
var losses = 0;
var guessRemain = 9;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];
var guessedLetters = [];
var userGuess = null;


//function for when user presses key/guesses
document.onkeyup = function(event) {
    var userGuess = event.key;
    // guessedLetters.push(userGuess);
    // I couldn't use the above code with the code to prevent duplicate guesses


// reduce the number of guesses by 1 with each NEW guess
// don't allow guesses with characters outside of the letters array

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessedLetters.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >=0) {
    	guessedLetters[guessedLetters.length]=userGuess;
    	guessRemain--;
    }

    //randomly choose a letter from letters var as the computers letter
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    //Increase Wins count by 1 when user guesses the computer's guesses correctly
    //reset the guesses remaining to 9
    //reset the guessed letters to display nothing

    if (userGuess === computerGuess) {
        wins++;
        guessRemain = 9;
        guessedLetters = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
   
   //reduce number of guesses remaining by 1 with each incorrect guess
    // } else {
    //     guessRemain--;
    //I included this functionality above with the code to prevent duplicate guesses
    }

    //Increase losses count by 1 after user runs out of guesses
    //reset guesses remaining back to 9
    //reset list of guessed letters
    if (guessRemain === 0) {
        losses++;
        guessRemain = 9;
        guessedLetters = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
    }


    //Display the count of wins, losses, guesses remaining and the letters guessed so far in the html
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessRemain").innerHTML = "Guesses Left: " + guessRemain;
    document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guessedLetters;

}