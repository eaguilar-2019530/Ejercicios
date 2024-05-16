import { useState } from 'react'
import toast from 'react-hot-toast'
import { serviceRequest } from '../../services/api'

export const useService = () => {
    const [isLoading, setItLoading] = useState(false)

    const service = async(name, description) =>{
        setItLoading(true)
        const 
    }
}
