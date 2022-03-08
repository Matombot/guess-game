
describe('Guessing Game function', function () {
    it('should display a message if your guess is too low', function () {
        let testGame = guessingGame();
        testGame.guessBtnClicked(6);
        assert.equal(testGame.guessBtnClicked("Your guess is to low"))
    });

    it('should display a message if your guess is too high', function () {
        let testGame = guessingGame();
        testGame.guessBtnClicked(87);
        assert.equal(testGame.guessBtnClicked("Your guess is to high"))
    });


    it('should display  an error message if your guess is above 100', function () {
        let testGame = guessingGame();
        testGame.guessBtnClicked(103);
        assert.equal(testGame.guessBtnClicked("Error , out of range please enter a number between 1 & 100"))
    });
    it('should display  an error message if your guess is below 0', function () {
        let testGame = guessingGame();
        testGame.guessBtnClicked(-5);
        assert.equal(testGame.guessBtnClicked("Error , out of range please enter a number between 1 & 100"))
    });



})