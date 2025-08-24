import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFecthByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)
        const date = await response.json()
    
        const dailySchedules = date.filter((schedule) => dayjs(date).isSame(schedule.date, 'day'))
    
        return dailySchedules
    } catch (error) {
        console.log(error)
        alert('Não foi possível retornar os agendamentos do dia')
    }
}