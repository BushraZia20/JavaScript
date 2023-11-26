document.addEventListener('DOMContentLoaded',function(){
    const openModalbtn = document.getElementById('openModal');
    const closeModalbtn =document.getElementById('closeModalbtn');
    const modal =document.getElementById('modal-box');
    openModalbtn.addEventListener('click',function(){
        modal.style.display='block';
    })

    closeModalbtn.addEventListener('click',function(){
        modal.style.display ='none';
    })
// })



//DOmcintentloaded=