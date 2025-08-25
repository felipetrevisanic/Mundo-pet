import { apiConfig } from './api-config.js'

export async function scheduleNew({ id, name, pet, phone, service, data, time }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, pet, phone, service, data, time })
        })

        alert('Agendamento realizado com sucesso')
        //função para carregar os agendamentos 
        
    } catch (error) {
        alert('Não foi possível concluir o agendamento, tenta novamente mais tarde')
        console.log(error)
    }
}