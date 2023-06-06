const homeScreen = document.getElementsByClassName('overlay')
// homeScreen.addEventListener('click', (event) =>{
//     event.style.display = 'none'
//     console.log('click')
// })
console.log(homeScreen)
const gitHub = document.getElementById('github')
gitHub.addEventListener('click', () => {
    document.location.href = 'https://www.github.com/gollobc'
})

const linkedIn = document.getElementById('linkedin')
linkedIn.addEventListener('click', () => {
    document.location.href = 'https://www.linkedin.com'
})