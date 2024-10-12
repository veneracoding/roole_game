


const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
diceImg.style.display = 'none';


 const switchPlayer = () => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

btnRoll.addEventListener('click',btnRollEventFunction);

// hold score
btnHold.addEventListener('click', btnHoldEventFunction);

// new game //
btnNew.addEventListener('click', btnNewFunction);