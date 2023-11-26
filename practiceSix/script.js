function createDiv(width, height, text) {
    const specifiedWidth = width + 'px'
    const specifiedHeight = height + 'px'

    const newDiv = document.createElement('div')
    newDiv.style.width = specifiedWidth
    newDiv.style.height = specifiedHeight
    newDiv.textContent = text
    
    document.getElementById('container').appendChild(newDiv)
}

///for a function to work it needs to be called..then how this function is working even without calling
