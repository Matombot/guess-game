const randomElem = document.querySelector(".random");
let randomNumber = Math.ceil((Math.random() * 100))
randomElem.innerHTML =randomNumber;

const number_guess= document.querySelector(".number_guess");
const guess_btn = document.querySelector(".guess_btn");
const message = document.querySelector(".message");

function guessBtnClicked(){
const guessedNumber =Number(number_guess.value);
if  (guessedNumber < randomNumber) {

    message.innerHTML ="Your guess istoo low"
}
else if (guessedNumber > randomNumber) {
    message.innerHTML ="Your guess is too high"
}
else{
    message.innerHTML ="Correct , the scret number is ${guessedNumber}"
}

guess_btn.addEventListener('click', guessBtnClicked)
}