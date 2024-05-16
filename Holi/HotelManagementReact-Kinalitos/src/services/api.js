import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:2880/',
    timeout: 5000,
})

export const serviceRequest = async (service) => {
    try {
        return await apiClient.post('/auth/service', service)
    } catch (err) {
        return {
            error: true,
            err,
        }
    }
}
