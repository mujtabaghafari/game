const choices = document.querySelectorAll('.choice');
const resultDiv = document.getElementById('result');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playRound(choice.id);
    });
});

function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'bomb'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = 'You win!';
    } else if (playerChoice === 'bomb') {
        result = '💥 You win with a BOMB!';
    } else {
        result = 'You lose!';
    }

    resultDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
