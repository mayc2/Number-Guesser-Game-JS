let min = 1, 
    max = 10, 
    winningNum = getWinningNum(), 
    guessesLeft = 3;

    console.log(winningNum);

const gameWrapper = document.querySelector('#game'), 
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

gameWrapper.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log((guess));
    
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a message between ${min} and ${max}`, 'red');
    }

    else if (guess === winningNum){
        gameOver(true,`You Win! ${winningNum} is correct!`);
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0){
            gameOver(false,`Game Over! The winning number was ${winningNum}`);
            
        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is incorrect! You have ${guessesLeft} guesses left.`, 'red');
        }
    }
});

function gameOver(win, msg){
    let color;
    win ? color = 'green' : color = 'red';
    
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';    
}

function setMessage(msg,color){
    message.textContent = msg;
    message.style.color = color;
}

function getWinningNum(){
    return Math.floor(Math.random()*(max-min+1)+min);
}