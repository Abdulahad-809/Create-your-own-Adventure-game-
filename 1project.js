const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");
console.log('Hello ' + name + ', welcome to the game!');

const shouldWePlay = prompt('Do you wanna play?');

const condition = shouldWePlay.toLocaleLowerCase() === "yes";

if (condition) {
    console.log("Ok, we will play!");
    const LeftOrRight = prompt("You enter a maze. Do you wanna go left or right?");

    if (LeftOrRight.toLocaleLowerCase() === 'left' || LeftOrRight.toLocaleLowerCase() === 'l') {
        console.log('You go left and see a bridge...');
        const cross = prompt('Do you wanna cross it or not?');

        if (cross.toLocaleLowerCase() === "yes") {
            console.log('You cross the bridge but it was broken. You lost.');
        } else {
            console.log('Good choice... You win!');
        }

    } else {
        console.log('You chose right but fell off a cliff...');
    }

} else if (shouldWePlay.toLocaleLowerCase() === 'no') {
    console.log("Ok :(");
} else {
    console.log("Invalid input...");
}
