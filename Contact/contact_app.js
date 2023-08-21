
// Grabbing images in footer and linking them to their respective sites
// const gitHub = document.getElementById('github')
// gitHub.addEventListener('click', () => {
//     window.open('https://www.github.com/gollobc', '_blank','noreferrer', 'noopener')
// })
// const linkedIn = document.getElementById('linkedin')
// linkedIn.addEventListener('click', () => {
//     window.open('https://www.linkedin.com/in/cadegollob', '_blank', 'noreferrer', 'noopener')
// })

const yourName = document.getElementById("name")
const email = document.getElementById('email')
const comments = document.getElementById('comments')
const submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    email.value = ''
    yourName.value = ''
    comments.value = ''
    alert('Thank you!')
})