// function swapTheme(){
//     const day = document.getElementById("app")
//     const buttonDay = document.getElementById("swap")

//     day.classList.toggle("night")
//     buttonDay.classList.toggle("button_night")
// }

//THE ACTUAL ONE
const btn = document.getElementById("swap");
 btn.addEventListener('click',function(){
    console.log("btn is clicked")
    const divMain =document.getElementById('app')
    const toggleButton = document.getElementById('swap')
    divMain.classList.toggle('night');
    toggleButton.classList.toggle('button_night');
 })

///////MY PRACTICE
// Type 1
// const btn = document.getElementById('swap')

// btn.addEventListener('click', function swapTheme(){
//     const day = document.getElementById('app')
//     const toggleButton = document.getElementById('swap')

//     day.classList.toggle('night')
//     toggleButton.classList.toggle('button_night')
// })

/* Type 2

function swapTheme(){
    const dayBackground = document.getElementsByClassName('day')
    const buttonDay = document.getElementsByClassName('button_day')

    dayBackground.classList.toggle('night')
    buttonDay.classList.toggle('button_night')
}
*/

//Type 3
function swapTheme(){
   const dayBackground = document.getElementById('app')
   const button_day = document.getElementById('button_day')

   dayBackground.classList.toggle('night')
   button_day.classList.toggle('button_night')
}

//y the type2 is not working but the type3 is working?