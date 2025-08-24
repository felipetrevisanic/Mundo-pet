const btn = document.getElementById('btn')
const overlay = document.querySelector(".overlay")

btn.addEventListener('click', (event) => {
    console.log('funcionando')
    overlay.classList.remove('hidden')
})