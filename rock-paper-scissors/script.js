let playerWinner = 0;
let computerWinner = 0;
let ties = 0;
function getComputerChoice() {
    let janken = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return random_j = janken[random];
}

// 気づき：ここでcomputerSelectionを定義するとランダムにならない！当たり前だけど

function getPlayerInput(){
    let playerInput = window.prompt("Rock, Paper, or Scissors? 1 2 Go!");
    let playerChoice = playerInput.toLowerCase();
    return playerChoice;
}

// 最初ここでplayRoundに引数としてplayerSelectionを用意していたが、そうするとすでに宣言されているよというエラーが出る。
// 用意した引数と同じ名前の変数は宣言してはならない！
// あと、宣言した関数を実行させる順番としてはplayRound()からはじめるべし

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerInput();

    // もしpsがrockでcsがscissorsなら勝ち
    // もしpsがrockでcsがpaperなら負け
    // もしpsがrockでcsがrockなら引き分け
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('Computer selected scissors. You Win! Rock beats scissors');
        console.log(playerWinner++);
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ) {
        console.log('Computer selected paper. You Lose! Paper beats rock');
        console.log(computerWinner++);
    } else if (playerSelection === 'rock' && computerSelection === 'rock' ) {
        console.log('Computer selected rock. Draw! Rock ties rock');

    // もしpsがscissorsでcsがrockなら負け
    // もしpsがscissorsでcsがpaperなら勝ち
    // もしpsがscissorsでcsがscissorsなら引き分け

    } else if (playerSelection === 'scissors' && computerSelection === 'rock' ) {
        console.log('Computer selected rock. You Lose! Rock beats scissors');
        console.log(computerWinner++);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Computer selected paper. You Win! Rock beats scissors');
        console.log(playerWinner++);
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('Computer selected scissors. Draw! Rock ties rock');

    // もしpsがpaperでcsがrockなら勝ち
    // もしpsがpaperでcsがscissorsなら負け
    // もしpsがpaperでcsがpaperなら引き分け

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('Computer selected rock. You Win! Paper beats rock');
        console.log(playerWinner++);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('Computer selected scissors. You Lose! Scissors beats paper');
        console.log(computerWinner++);
    } else if (playerSelection === 'paper' && computerSelection === 'paper') 
        console.log('Computer selected paper. Draw! Paper ties paper');
}

function game () {
    // ゲーム回数が1~4 の間はゲームができる。totalRoundsが5になったら結果を伝える
    for (i = 1; i <= 5; i++) {
    let roundResult = playRound();
        if (i<= 4) {
            let count = 5 - i;
            console.log('You can play ' + count + ' more times');
        } else if (i === 5){
            console.log('Game Over!');
        } 
    }
}

function judge() {
    let start = game();
    if (playerWinner > computerWinner){
        console.log('You won. Congratulation!');
    } else if (playerWinner < computerWinner){
    console.log('You lose. Do\'nt let you down....'); 
    } else {
    console.log('Tie. You will win next time :)')
    }
}

