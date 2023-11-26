/*let images = document.createElement("img")
images.src = "https://www.shutterstock.com/image-photo/pumpkim-food-orange-260nw-1200335671.jpg"

images.alt ="......"

const imgss = document.getElementById("name")

for(let i =0; i <10; i++){
    imgss.appendChild(images.cloneNode(true))
}

// imgss.forEach(div=>{
//     div.appendChild(imgss.cloneNode(true))
// })
*/
function createNewDiv(height, width, text){
    const specifyingHeight = height + 'px'
    const specifyingWidth = width + 'px'

    const newDiv = document.createElement('div')
    newDiv.style.height = specifyingHeight
    newDiv.style.width = specifyingWidth
    newDiv.textContent = text;

    document.getElementById('container').appendChild(newDiv)
}


