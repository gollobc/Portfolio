// const homeScreen = document.querySelector('.overlay')
// homeScreen.addEventListener('click', (event) =>{
//     event.target.style.display = 'none'
// })
const gitHub = document.getElementById('github')
gitHub.addEventListener('click', () => {
    document.location.href = 'https://www.github.com/gollobc'
    console.log('cllick')
})

const linkedIn = document.getElementById('linkedin')
linkedIn.addEventListener('click', () => {
    document.location.href = 'https://www.linkedin.com/in/cade-gollob'
})

const resume = document.getElementById('resume')
