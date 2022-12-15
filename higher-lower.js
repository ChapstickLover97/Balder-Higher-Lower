// prompt for max #
let n = prompt("Please enter a maximum number greater than 1");

if (n>=2 && n != NaN){
    console.log(Math.round(n));
}
else {
    prompt("Please enter a maximum number greater than 1");
}

// get random # between 1 and n
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// store random #
let randInteger = getRandomInt(1, n)
console.log(randInteger);

// create array and validate entries into array
let userGuesses = [];
function addGuesses(guess) {
    if(!isNaN(guess) && (guess <= n) && (guess >= 1) && (userGuesses.includes(guess) === false)) {
    userGuesses.push(Math.round(guess));
    }
    else if (userGuesses.includes(guess) === true) {
        message.innerHTML = "Already guessed that one - you're a funny guy, aren't ya?";
    }
    console.log(userGuesses.join(", "));
}


// message paragraph
function doGuess() {
    let guess = Number(document.getElementById("guess").value);

    if(guess == randInteger) {
        message.innerHTML = "Ya got it, bud!  It took you " + (userGuesses.length +1) + " tries, and your guesses were " + (userGuesses) + (", and ")+ (randInteger) + "!";
    }
    else if (guess > randInteger && guess <= n) {
        message.innerHTML = "Nope, too high";
    }
    else if (guess > n || guess < 1) {
        message.innerHTML = "Outside the range, bud.  Give it another shot though.  I believe in you X";
    }
    else if (isNaN(guess)) {
        message.innerHTML = "Not a number, bud.  Let's go over this one more time: 1, 2, 3, 4...you still with me?";
    }
    else if (guess < randInteger && guess <= 0) {
        message.innerHTML = "That...wasn't an option, bud.  Do we have to go over numbers again?";
    }
    else {
        message.innerHTML = "Nope, too low";
    }

    addGuesses(guess);
    console.log(guess);
}
