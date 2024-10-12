function btnRollEventFunction() {
    if (gameOver) diceImg.style.display = 'block';

    const random = Math.floor(Math.random() * 6 + 1);
    console.log(random)
    diceImg.src = `./img/dice-${random}.png`;
console.log('hello')
    if (random !== 1) {
        currentScore += random;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
};

 function btnHoldEventFunction() {
    if (gameOver) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        currentScore = 0;

        if (score[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            gameOver = false;
            diceImg.style.display = 'none';
        } else {
            switchPlayer();
        }
    }
}

function btnNewFunction(){
    () => {
        currentScore = 0;
        activePlayer = 0;
        score = [0, 0];
        gameOver = true;
        document.getElementById(`current--0`).textContent = 0;
        document.getElementById(`current--1`).textContent = 0;
        document.getElementById(`score--0`).textContent = 0;
        document.getElementById(`score--1`).textContent = 0;
        document.querySelector('.player--0').classList.remove('player--winner');
        document.querySelector('.player--1').classList.remove('player--winner');
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
        diceImg.style.display = 'none';
    };
    
}