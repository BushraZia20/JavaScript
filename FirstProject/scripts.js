// function randomnum(){
//     return function getRandomInt() {
//         return Math.floor(Math.random() * 20);
//       }

// }

// const randomNumber = document.querySelector('.number', randomnum)
// const myNumber = document.querySelector('guess').value = "1"

// console.log("input value", myNumber);


// function checkGuess(){
//     if(myNumber===0){
//         console.log()
//     }
//     else if(myNumber===randomNumber){
//         console.log(document.querySelector("message").textContent ="correct ans");
//     }else{
//         console.log(document.querySelector("message").textContent ="wrng ans");

//     }
// }
// document.querySelector("check").addEventListener("click", checkGuess())

const randomNum = Math.floor(Math.random() * 20) + 1;


const check = document.querySelector('.btn.check');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const number = document.querySelector('.number')


check.addEventListener('click', function () {
    console.log("inside the check btn"); 
    const userdata = parseInt(input.value)


    if (userdata === randomNum) {
        message.textContent = "Win"
        number.textContent = randomNum
        document.body.style.backgroundColor = "green";
        if (score > highScore) {
            highScore = score;
            highScore.textContent = highScore;
        }
    } else {
        message.textContent = userdata > randomNum ? 'Too high , Try again' : 'Too low, Try again';
        score--;
        score.textContent = score;
        if (score <= 0) {
            score = 20;
            highScore.textContent = score;
        }
    }
});