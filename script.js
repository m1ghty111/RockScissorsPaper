// console.log('Hello World!');
// let biba = undefined;
// console.log(biba);
// [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function(value, index){
//     console.log(Math.pow(value,2));
// });
// const max = 57;
// let actual = max - 13;
// let percentage = actual / max;
// console.log(percentage);

// function favoriteAnimal(animal) {
//     console.log(animal + " is my favorite animal!")
//   }
  
//   favoriteAnimal('Rostick')

//   function Add7(number){
//       return (number+7);
//   }

//   console.log(Add7(3));

//   function Mul(operand1, operand2){
//       return (operand1*operand2);
//   }

//   console.log(Mul(2,3));

//   function Upp(string){
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   console.log(Upp('hello'));

//   function LastOne(string){
//       return string.charAt(string.length - 1);
//   }
// //   console.log(LastOne('hello'));

// //   let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// //   console.log(answer + 1);  

//   let finish = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

//   for(let i = 0; i <= finish; i++){
//     if(i%3 === 0){
//         console.log('Yes');
//     }  
//     else console.log(i);
//   }

let options = ['rock', 'scissors', 'paper']

let CompChoice = options[Math.floor(Math.random() * options.length)];
let UserChoice = null;
do {
    
    UserChoice = prompt('Pls enter your choice: ').toLowerCase();
    if(UserChoice === 'rock' || UserChoice === 'scissors' || UserChoice === 'paper') break;

}while(true);

Game(CompChoice, UserChoice);

function Game(CompChoice, UserChoice){

    if(UserChoice === CompChoice){
        console.log('Tie!');
    }
    else if (
    (UserChoice == 'rock' && CompChoice == 'scissors') ||
    (UserChoice == 'scissors' && CompChoice == 'paper') ||
    (UserChoice == 'paper' && CompChoice == 'stone'))
    {
        console.log('You won!');
    }
    else console.log('You lost :(');

}

  