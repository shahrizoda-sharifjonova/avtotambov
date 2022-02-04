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

// const headerLink = document.querySelectorAll('.header__link'),
//     headerList = document.querySelector('.header__list');

// headerLink.forEach(element => {
//     element.addEventListener('mouseover', ()=>{
//         headerList.style.borderTop = '1px solid transparent'
//     })
// });
