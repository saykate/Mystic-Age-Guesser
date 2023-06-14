const welcomeMessage = "Welcome to the Mystic Age Guesser! Please enter your name to being.";

let userName = prompt(welcomeMessage);

while(!userName) {
    userName = prompt(welcomeMessage)
};

alert(`Hey ${userName}! Let's play a game. I have mystical powers to guess your age in under 7 attempts!`);

let lowerAgeBoundry = 1;
let upperAgeBoundry = 122;
let didGuessCorrectly = false;

while (didGuessCorrectly === false){
    if (lowerAgeBoundry > upperAgeBoundry) {
        alert(`Hey ${userName} it seems like there's some magical disturbance... Refresh the page to play again.`)
    }
let guess = Math.floor((lowerAgeBoundry + upperAgeBoundry) / 2);

let userResponseToGuess = null;

while (userResponseToGuess !== 'y' && userResponseToGuess !== 'n') {
userResponseToGuess = prompt(`Is your age ${guess}? Please enter 'y' for yes or 'n' for no`);
}

didGuessCorrectly = userResponseToGuess === 'y';

if (didGuessCorrectly === false) {
    let userResponsetoOlderYounger = null;
        //1: older, 2: younger//
    while (userResponsetoOlderYounger !== '1' && userResponsetoOlderYounger !== '2') {
        userResponsetoOlderYounger = prompt(`Are you older or younger than ${guess}? Enter 1 for older or 2 for younger.`);
        }
        //older//
        if (userResponsetoOlderYounger === '1') {
            lowerAgeBoundry = guess + 1;
        }
        //younger//
        else {
            upperAgeBoundry = guess - 1;
        }
    }
}

alert('Please refesh the page to play again!');




