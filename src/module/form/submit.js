import { scheduleNew } from '../../services/schedule-new.js'

const form = document.querySelector('form')
const btnNewSchedule = document.getElementById('btn-new-schedule')
const overlay = document.querySelector('.overlay')


form.addEventListener('submit', (event) => {
    event.preventDefault()


    const name = document.getElementById('name').value
    const pet = document.getElementById('pet').value
    const phone = document.getElementById('phone').value
    const service = document.getElementById('service').value
    const date = document.getElementById('schedule-date').value
    const time = document.getElementById('schedule-time').value
    const id =  new Date().getTime().toString()

    scheduleNew({id, name, pet, phone, service, date, time})

    overlay.classList.add('hidden')
})