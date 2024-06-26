import express from 'express'
import {register, login, update, deleteU, TEST } from './user.controller.js'
import { isAdmin, validateJwt  } from '../middlewares/validate-jwt.js'

const api = express.Router()

api.get('/test', TEST)

api.put('/update/:id',[validateJwt, isAdmin], update)
api.delete('/deleteU/:id',[validateJwt], deleteU)

api.post('/register', register)
api.post('/login', login)

export default api 