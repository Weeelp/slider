const upbtn = document.querySelector('.up-button')
const downbtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container =document.querySelector('.container')

let active = 0

sidebar.style.top = `-${(slidesCount-1)*100}vh`

upbtn.addEventListener('click', () => {changeSlide('up')})
downbtn.addEventListener('click', () => {changeSlide('down')})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp'){changeSlide('up')} else if (event.key === 'ArrowDown'){changeSlide('down')}
})

function changeSlide (direction){
    if (direction === 'up'){
        active++
        if (active === slidesCount){
            active = 0
        }
    } else if (direction === 'down'){
        active--
        if (active < 0){
            active = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${active * height}px)`

    sidebar.style.transform = `translateY(${active * height}px)`

}