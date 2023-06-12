// Grabbing images in footer and linking them to their respective sites
const gitHub = document.getElementById('github')
gitHub.addEventListener('click', () => {
    window.open('https://www.github.com/gollobc', '_blank','noreferrer', 'noopener')
})
const linkedIn = document.getElementById('linkedin')
linkedIn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/cadegollob', '_blank', 'noreferrer', 'noopener')
})

//Runs when resume button is clicked. Creates and iframe and appends the new element below the button with a button to clear the iframe.
function openR() {
    let resume = document.createElement('IFRAME')
    resume.setAttribute('src', '../Resumenewest.docx.pdf')
    let styleResume = document.getElementById('iframe').appendChild(resume)

    let close = document.createElement('button')
    close.innerText = 'Exit'
    let closeButton = document.getElementById('iframe').appendChild(close)
    
    closeButton.addEventListener('click', (event) => {
        document.querySelector('IFRAME').remove()
        document.getElementById('iframe').removeChild(close)
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
    //Starting images over if you click next on last image.
    if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }
    //Changing what image is displayed when button is clicked
    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
})
prev.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex--
    //Starting images at last image if you click prev on first image.
    if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    }
    //Changing what image is displayed when button is clicked
    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
})