const popupClose = document.querySelector('.popup__close'),
    body = document.querySelector('body'),
    popup = document.querySelector('.popup'),
    btn = document.querySelectorAll('.btn');

btn.forEach(element => {
    element.addEventListener('click', ()=>{
        popup.classList.add('active')
        body.style.overflowX = 'hidden'
        body.style.overflowY = 'hidden'
    })        
});

popupClose.addEventListener('click', ()=>{
    popup.classList.remove('active')
    body.style.overflowX = 'visible'
    body.style.overflowY = 'visible'
})