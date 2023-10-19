const column = document.querySelectorAll('.column');
const body = document.querySelector('body');
const heading = document.querySelector("#heading");
const button = document.querySelector('button');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');
const sixth = document.querySelector('.sixth');
const seventh = document.querySelector('.seventh');
const eighth = document.querySelector('.eighth');
const nineth = document.querySelector('.ninth');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
let i =0;
let k=0, index=0;
let countO=0, countX=0 ;
let gameFinished = false;
let gameStarted = false;

// gameStart();

function findWinnerOrLoser() {
    if(!gameFinished){
        if(first.innerText ==='X' && second.innerText === 'X' && third.innerText === 'X'){
            heading.innerText = "X is the Winner";
            gameFinished = true; countX++;
        }
        else if(first.innerText ==='X' && fourth.innerText === 'X' && seventh.innerText === 'X'){
            heading.innerText = "X is the Winner";
            gameFinished = true; countX++;
        }
        else if(first.innerText ==='X' && fifth.innerText === 'X' && nineth.innerText === 'X' ){
            heading.innerText = "X is the Winner";
            gameFinished = true; countX++;
        }
        else if(second.innerText === 'X' && fifth.innerText === 'X' && eighth.innerText === 'X'){
            heading.innerText = "X is the Winner";
            gameFinished = true; countX++;
        }
        else if(third.innerText === 'X' && sixth.innerText === 'X' && nineth.innerText === 'X'){
            heading.innerText = "X is the Winner";
            gameFinished = true; countX++;
        }
        else if(third.innerText ==='X' && fifth.innerText === 'X' && seventh.innerText === 'X'){
            heading.innerText = "X is the Winner";
            gameFinished = true; countX++;
        }
        else if(fourth.innerText === 'X' && fifth.innerText === 'X' && sixth.innerText==='X' ){
            heading.innerText = "X is the Winner";
            gameFinished = true; countX++;
        }
        else if(seventh.innerText ==='X'&& eighth.innerText === 'X' && nineth.innerText==='X' ){
            heading.innerText = "X is the Winner";
            gameFinished = true; countX++;
        }
        else if(first.innerText ==='O' && second.innerText === 'O' && third.innerText === 'O'){
            heading.innerText = "O is the Winner";
            gameFinished = true; countO++;
        }
        else if(first.innerText ==='X' && fourth.innerText === 'X' && seventh.innerText === 'X'){
            heading.innerText = "O is the Winner";
            gameFinished = true; countO++;
        }
        else if(first.innerText ==='O' && fifth.innerText === 'O' && nineth.innerText === 'O' ){
            heading.innerText = "O is the Winner";
            gameFinished = true; countO++;
        }
        else if(second.innerText === 'O' && fifth.innerText === 'O' && eighth.innerText === 'O'){
            heading.innerText = "O is the Winner";
            gameFinished = true; countO++;
        }
        else if(third.innerText === 'O' && sixth.innerText === 'O' && nineth.innerText === 'O'){
            heading.innerText = "O is the Winner";
            gameFinished = true; countO++;
        }
        else if(third.innerText ==='O' && fifth.innerText === 'O' && seventh.innerText === 'O'){
            heading.innerText = "O is the Winner";
            gameFinished = true; countO++;
        }
        else if(fourth.innerText === 'O' && fifth.innerText === 'O' && sixth.innerText==='O' ){
            heading.innerText = "O is the Winner";
            gameFinished = true; countO++;
        }
        else if(seventh.innerText ==='O'&& eighth.innerText === 'O' && nineth.innerText==='O' ){
            heading.innerText = "O is the Winner";
            gameFinished = true; countO++;
        }
        else{
            if(index === 9) heading.innerText = "Match Draw";
        }
    }
}

function ticTacToe() {
    for(let j of column){
        j.addEventListener('click' , handleClick);  
    }
}
function handleClick() {
    if(!gameFinished && !(this.innerText === 'X' || this.innerText === 'O')){
        const p = document.createElement('p');
        p.classList.add('content');
        if(index % 2===0){
            p.innerText = "X";
        }
        else{
            p.innerText = "O";
        }
        this.appendChild(p);
        index++;
        findWinnerOrLoser();
        one.innerText = countX;
        two.innerText = countO;
        gameStarted = true;
    }
}
async function gameStart() {
    // Reset the game state
    for (let j of column) {
        j.innerText = '';
    }
    heading.innerText = `Level ${++k}`;
    body.removeChild(button);
    await ticTacToe();
    
        gameContinue();
}
function gameContinue() {
        const button1 = document.createElement('button');
        button1.classList.add('button')
        button1.innerText = "Restart";
        body.appendChild(button1);
        button1.addEventListener('click' , ()=>{
            heading.innerText = `Level ${++k}`;
            ticTacToe();
            startOver();
        });  
}

function startOver(){
    gameFinished = false;
    index = 0;
    for (let j of column) {
        j.innerText = '';
    }
    gameStarted = false;
}
button.addEventListener('click', gameStart);
