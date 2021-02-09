// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);


// const par = document.createElement('p');
// par.textContent = 'I\'m red';
// par.style.color = 'red';
// container.appendChild(par);

// const h3 = document.createElement('h3');
// h3.textContent = 'I\'m blue h3!' ;
// h3.style.color = 'blue';
// container.appendChild(h3);

// const div = document.createElement('div');
// const h1 = document.createElement('h1');
// h1.textContent = 'I\'m in a div';
// const p = document.createElement('p');
// p.textContent = 'Me too!';
// div.style.backgroundColor = 'pink';

// div.style.border ='1px solid black'
// div.appendChild(h1);
// div.appendChild(p);
// container.appendChild(div);


let options = ['rock', 'scissors', 'paper']


let CompChoice = null;
let UserChoice = null;

let UserScore = 0;
let ComputerScore = 0;



const results = document.querySelector('results');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
   if(button.id == 'btn-1') UserChoice = 'rock';
   if(button.id == 'btn-2') UserChoice = 'scissors';
   if(button.id == 'btn-3') UserChoice = 'paper';
   Game(CompChoice, UserChoice);

  });
});


const reset = document.getElementById('rs');


document.getElementById('Score').innerText = 'AI: ' + ComputerScore;
document.getElementById('UserScore').innerText = 'User: ' + UserScore;

reset.addEventListener('click', () =>{
    UserScore = 0;
    ComputerScore = 0;
    alert("The score was reset");
    document.getElementById('ResDisplay').innerText = "";
    document.getElementById('Score').innerText = 'AI: ' + ComputerScore;
    document.getElementById('UserScore').innerText = 'User: ' + UserScore;
    document.getElementById('ComputerChoice').innerText = "";
});


//Game logic:

function CChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

function Game(CompChoice, UserChoice){
    CompChoice = CChoice();
    document.getElementById('ComputerChoice').innerText = "Computer took: ";
    if(UserChoice === CompChoice){
        document.getElementById('ComputerChoice').innerText = '';
        document.getElementById('ResDisplay').innerText = "Tie!";
    }
    else if (
    (UserChoice == 'rock' && CompChoice == 'scissors') ||
    (UserChoice == 'scissors' && CompChoice == 'paper') ||
    (UserChoice == 'paper' && CompChoice == 'rock'))
    {
        document.getElementById('ResDisplay').innerText = "You won!";
        document.getElementById('ComputerChoice').innerText += ' ' + CompChoice;
        UserScore++;
        document.getElementById('Score').innerText = 'AI: ' + ComputerScore;
        document.getElementById('UserScore').innerText = 'User: ' + UserScore;
    }
    else {
        document.getElementById('ResDisplay').innerText = "You lost!";
        document.getElementById('ComputerChoice').innerText += ' ' + CompChoice;
        ComputerScore++;
        document.getElementById('Score').innerText = 'AI: ' + ComputerScore;
        document.getElementById('UserScore').innerText = 'User: ' + UserScore;
    }
}

