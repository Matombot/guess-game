guessingGame = () => {
    let randomNumber = Math.ceil((Math.random() * 100));



    function errorMessage() {

    }

    guessBtnClicked =() => {
        const guessedNumber = Number;
        const message = "";

        if (guessedNumber > 100 || guessedNumber < 0) {
            message.innerHTML = 'Error , out of range please enter a number between 1 & 100';

        } else if (guessedNumber < randomNumber) {
            message.innerHTML = 'Your guess is too low';


        } else if (guessedNumber > randomNumber) {
            message.innerHTML = 'Your guess is too High';


        } else {
            message.innerHTML = `correct, the secret number is ${guessedNumber}`

        }

    }
    return {
        guessBtnClicked,
        errorMessage
    }

}