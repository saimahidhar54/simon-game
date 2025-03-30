let gameSeq = [];
let userSeq = [];
let colors = ['red','blue','green','yellow'];
let started = false;
let level = 0;
let highScore = 0;
h2 = document.querySelector('h2');
h3 = document.querySelector('h3');

document.addEventListener('keypress',function(){
    if(started == false){
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },250);
}

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random()*4);
    let randColor = colors[randInd];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);

    gameFlash(randBtn);
}

function checkAns(idx){
    if(gameSeq[idx] == userSeq[idx]){
        if(idx == level-1)
        {
        setTimeout(levelUp,1000);
        }
    }
    else{
        if(level - 1 > highScore)
        {
            highScore = level - 1;
            h3.innerText = `High Score : ${highScore}`;
        }
        h2.innerHTML = `Game Over . Your Score : ${level - 1} <br> Press any key to start.`;
        document.querySelector('body').style.backgroundColor  = 'red';
        setTimeout(
            document.querySelector('body').style.backgroundColor  = 'white',
            150
        );
        reset();
    }
}

function btnpress(){
    btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let btns = document.querySelectorAll('.btn');

for(btn of btns){
    btn.addEventListener('click',
        btnpress)
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}



