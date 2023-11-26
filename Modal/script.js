document.addEventListener('DOMContentLoaded', function(){
    const openbtn = document.getElementById('openModal')
    const modalbox = document.getElementById('modalBox')
    
    openbtn.addEventListener('click', function(){
        modalbox.style.display = 'block'
    })
    window.addEventListener('click', function(event){
        if(event.target===modalbox){
            modalbox.style.display = 'none'
        }
    } )

    const openbtn2 = document.getElementById('openModal2')
    const modalbox2 = document.getElementById('modalBox2')
    
    openbtn2.addEventListener('click', function(){
        modalbox2.style.display = 'block'
    })
    window.addEventListener('click', function(event){
        if(event.target===modalbox2){
            modalbox2.style.display = 'none'
        }
    } )

    const openbtn3 = document.getElementById('openModal3')
    const modalbox3 = document.getElementById('modalBox3')
    
    openbtn3.addEventListener('click', function(){
        modalbox3.style.display = 'block'
    })
    window.addEventListener('click', function(event){
        if(event.target===modalbox3){
            modalbox3.style.display = 'none'
        }
    } )
})




