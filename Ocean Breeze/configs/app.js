import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import userRoutes from '../src/User/user.routes.js'

const app = express()
config()
const port = process.env.PORT || 3200

//Configurar el servidor de express
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors()) 
app.use(helmet()) 
app.use(morgan('dev')) 

//Declaración de rutas
app.use(userRoutes)


//Levantar el servidor
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}