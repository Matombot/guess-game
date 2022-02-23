let randomNumber = Math.ceil((Math.random() * 100))

const number_guess= document.querySelector(".number_guess");
const guess_btn = document.querySelector(".guess_btn");
const message = document.querySelector(".message");

function guessBtnClicked(){
const guessedNumber = Number(number_guess.value);
if  (guessedNumber < randomNumber) {

    message.innerHTML ="Your guess is too low" ;
}
else if (guessedNumber > randomNumber) {
    message.innerHTML ="Your guess is too high" ;
}
else if (guessedNumber > 100 || guessedNumber < 1){
    message.innerHTML = "error , out of range" ;
    // alert ("error , out of range")
}
else{
    message.innerHTML =`Correct , the secret number is ${guessedNumber}`
}
setTimeout (function (){
    message.innerHTML = "" ;
}, 5000);
}

guess_btn.addEventListener('click', guessBtnClicked)
setTimeout(function guessBtnClicked(){
    message.innerHTML = "New game started !";
}, 3000);