let burgerMenu = document.querySelector('.burgerBar')
let menu = document.querySelector('.menu')
let offScreenMenu = document.querySelector('.of_screen_menu')
let closeBtn = document.querySelector('.fa-xmark')

burgerMenu.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})
closeBtn.addEventListener('click', () => {
    offScreenMenu.classList.remove('active');
});