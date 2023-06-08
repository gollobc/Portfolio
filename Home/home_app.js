// const homeScreen = document.querySelector('.overlay')
// homeScreen.addEventListener('click', (event) =>{
//     event.target.style.display = 'none'
// })

const gitHub = document.getElementById('github')
gitHub.addEventListener('click', () => {
    window.open('https://www.github.com/gollobc', '_blank','noreferrer', 'noopener')
})

const linkedIn = document.getElementById('linkedin')
linkedIn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/cadegollob', '_blank', 'noreferrer', 'noopener')
})

function openR() {
    let resume = document.createElement('IFRAME')
    resume.setAttribute('src', '../Resumenewest.docx.pdf')
    let styleResume = document.getElementById('iframe').appendChild(resume)

    let close = document.createElement('button')
    close.innerText = 'Exit'
    let closeButton = document.getElementById('iframe').appendChild(close)

    closeButton.addEventListener('click', (event) => {
        document.querySelector('IFRAME').remove()
        document.getElementById('iframe').removeChild(event.target)
     })
};



//Grabbing the images and buttons for carousel
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const images = document.getElementsByClassName('images');

let currentImgIndex = 0;
let previousImgIndex = 0;

next.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex++

    if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }

    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
})
prev.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex--

    if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    }

    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
})