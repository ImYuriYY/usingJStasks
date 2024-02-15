const slider = document.querySelector('.slider')
const prevbtn = document.querySelector('.prev-button')
const nextbtn = document.querySelector('.next-button')

const slides = Array.from(document.querySelectorAll('.slide'))
const slidesLength = slides.length;
let slideIndex = 0

prevbtn.addEventListener('click', goToPrevSlide)
nextbtn.addEventListener('click', goToNextSlide)

function goToPrevSlide() {
    slideIndex--
    if(slideIndex < 0) {
        slideIndex = slidesLength - 1
    }
    showSlide()
}


function goToNextSlide() {
    slideIndex++
    if (slideIndex >= slidesLength) {
        slideIndex = 0
    }
    showSlide()
}


function showSlide() {
    slides.forEach((slide, index) => {
        if(index === slideIndex) {
            slide.style.display = 'flex'
        } else {
            slide.style.display = 'none'
        }
    });
}






















const acc = document.querySelectorAll('.accordion')

for(let i = 0; i < acc.length; i++ ){
    acc[i].addEventListener("click", function () {
        this.classList.toggle('active')
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null
            panel.style.padding = null
        } else {
            panel.style.maxHeight = `${panel.scrollHeight + 20}px`
            panel.style.padding = '10px 30px'
        }
    })
}


















const menu = document.querySelector('.menu')
const span = document.querySelector('.menu-burger__header')

span.addEventListener('click', () => {
    menu.classList.toggle('active')
})










const btns = document.querySelectorAll('.tabs__btn')

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const item = document.querySelector('.tabs__block._active')
        const itemBtn = document.querySelector('.tabs__btn._active')

        if(item) {
            item.classList.remove('_active')
        }
        if(itemBtn) {
            itemBtn.classList.remove('_active')
        }

        const nextItemBtn = `#${btn.getAttribute('data-tab')}`

        const nextItem = document.querySelector(nextItemBtn)

        btn.classList.add('_active')
        nextItem.classList.add('_active')
        
    })

});

























const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')

document.addEventListener('keydown', jump)

function jump() {
    if(!dino.classList.contains('jump')) {
        dino.classList.add('jump')
    }

    setTimeout(() => {
        dino.classList.remove('jump')
    }, 500);
}


let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    if((cactusLeft > 0 && cactusLeft < 40) && dinoTop >= 160 ) {
        alert('game over')
    }
}, 20);