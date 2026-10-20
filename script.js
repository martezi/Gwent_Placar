let lastAdvTotal = 0;
let lastPlayerTotal = 0;

function updateScores() {
    const advInputs = document.querySelectorAll('.adv-input');
    const playerInputs = document.querySelectorAll('.player-input');

    let advSum = 0;
    advInputs.forEach(input => {
        let val = parseInt(input.value, 10);
        if (isNaN(val) || val < 0) val = 0;
        advSum += val;
    });

    let playerSum = 0;
    playerInputs.forEach(input => {
        let val = parseInt(input.value, 10);
        if (isNaN(val) || val < 0) val = 0;
        playerSum += val;
    });

    const advTotalElement = document.getElementById('adv-total');
    const playerTotalElement = document.getElementById('player-total');
    const advShield = document.getElementById('adv-shield');
    const playerShield = document.getElementById('player-shield');

    if (advSum !== lastAdvTotal) {
        advTotalElement.innerText = advSum;
        triggerAnimation(advShield);
        lastAdvTotal = advSum;
    }

    if (playerSum !== lastPlayerTotal) {
        playerTotalElement.innerText = playerSum;
        triggerAnimation(playerShield);
        lastPlayerTotal = playerSum;
    }
}

function triggerAnimation(element) {
    element.classList.remove('pulse-anim');
    void element.offsetWidth;
    element.classList.add('pulse-anim');
}

function resetGame() {
    const confirmReset = window.confirm("Deseja realmente zerar todos os pontos da partida atual?");

    if (confirmReset) {
        const allInputs = document.querySelectorAll('.score-input');
        allInputs.forEach(input => {
            input.value = "0";
        });
        updateScores();
    }
}

document.querySelectorAll('.score-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.select();
    });
    input.addEventListener('blur', function() {
        if (this.value === "") {
            this.value = "0";
            updateScores();
        }
    });
});

document.querySelectorAll('.score-input').forEach(input => {
    input.addEventListener('input', updateScores);
});
document.querySelector('.reset-btn').addEventListener('click', resetGame);
