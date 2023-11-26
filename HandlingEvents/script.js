// document.getElementById("myFrom").addEventListener("submit",function(bushra){
//    bushra.preventDefault();
//   const res = document.getElementById("username").value
//   document.getElementById("result").innerText = "Submitted result: "+ res
// })


// const paragraph =document.getElementById("paragraph");

// paragraph.addEventListener("mouseover",function(){
//    paragraph.classList.add("hovered")
// });

// paragraph.addEventListener("mouseout",function(){
//     paragraph.classList.remove("hovered");
// })


const myOption = document.getElementById("myOption")
const res = document.getElementById("result")
const btn = document.getElementById("x")

x.addEventListener("click",function(){
   console.log(myOption)
   const selectedOption = myOption.value
   res.textContent="selected Option: " + selectedOption;
})