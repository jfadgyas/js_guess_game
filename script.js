//variables
let myNumber = Math.floor(Math.random() * 25);

//function declaration
/*
Initialize the game. Welcome and instructions for the user
Console log the actual number for cheating
*/
const init = () => {
    yourName = prompt('Welcome! What is your name?');
    document.body.style.background = 'black';
    let welcome = document.createElement('h1');
    welcome.innerHTML = 'Hello ' + yourName + '!';
    welcome.style.color = 'white';
    document.body.appendChild(welcome);
    let rules = document.createElement('p');
    rules.innerHTML = 'We are going to play a game! I think a number between 0-25 and you must guess it. You may guess 5 times before you loose! Good luck!';
    rules.style.color = 'white';
    document.body.appendChild(rules);
    console.log(myNumber); //
    setTimeout(() => play(0), 6000); //to give time to read the instructions
}


/*Rounds (max 5), ask for the user guess.
Check if the number between 0-25, but not if its an integer
also not if its not a number
Give the user a hint, higer or lower number
*/

const play = (rounds) => {
    let numString = ['first', 'second', 'third', 'fourth', 'last'];
    for (i=rounds; i<5; i++){
        let guess = prompt('Enter your ' + numString[i] + ' guess')
        if (guess < 0 || guess > 25){
            confirm('Your number is not between 0 and 25, try again!')
            play(i);
        }
        else{
            if (checkNum(guess)){
                alert('You won! Well done! You are free to go!');
                return true;
            }
            else if (i < 4){
                if (guess > myNumber){
                    alert('Nice try, but it is NOT correct. Try a lower number!');
                }
                else{
                    alert('Nice try, but it is NOT correct. Try a higher number!');
                }
            }
            else{
                alert('You are such a looser. Game Over! The number was ' + myNumber);
            }
        }
    }
}


//check if the number is correct
// return true or false
const checkNum = (userGuess) => {
    if (userGuess == myNumber){
        return true;
    }
    else{
        return false;
    }
}

//Start the game
init();



