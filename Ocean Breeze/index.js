//Ejecutar servicios
import { initServer } from './configs/app.js'
import { connect } from './configs/mongo.js'
import {ADMIN} from './src/User/user.controller.js'

initServer()
connect()
ADMIN()