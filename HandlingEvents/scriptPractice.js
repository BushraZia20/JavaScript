/*const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    prompt('please enter ur Name')
    alert('the name is entered')
})
*/

// SUBMIT

/*
const newForm = document.getElementById('newForm')
newForm.addEventListener('submit', function(){
    alert('the name is submitted')
})
*/

/*
const newForm = document.getElementById('newForm')
newForm.addEventListener('submit', function(noRepeat){
    noRepeat.preventDefault();

    const res = document.querySelector('p')
    res.innerText= 'submitted form'
})
*/

const mouseOver = document.getElementById('mouse_over')
mouseOver.addEventListener('mouseover', function(){
    mouseOver.classList.add('hovered')  
})
mouseOver.addEventListener(mouseout, function(){
    mouseOver.classList.remove('hovered')  
})
