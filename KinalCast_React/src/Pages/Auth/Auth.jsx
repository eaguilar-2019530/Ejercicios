import { Register } from '../../components/Register.jsx'
import { Login } from '../../components/Login.jsx'
import { useState } from 'react'
import './Auth.css'

export const Auth = () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <>
        {
            isLogin?(
                <Login></Login>
            ): (
                <Register></Register>
            )
        }
        </>
    )
}
