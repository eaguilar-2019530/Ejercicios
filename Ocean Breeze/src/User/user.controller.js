'use strict'

import User from "./user.model.js"
import { encrypt,checkPassword, checkUpdate }  from "../utils/validator.js"
import { generateJwt } from "../utils/jwt.js"



export const TEST = async(req, res)=>{
    console.log('Prueba de conexion ')
}

export const ADMIN = async(req,res)=>{
    try {
        let defaultADMIN = await User.findOne({ username: 'bjulian'})
        if (!defaultADMIN) {
            let data = {
                email: 'bjulian@gmail.com',
                username: 'bjulian',
                password: '12345',
                role: 'ADMIN'
            }
            data.password = await encrypt(data.password)
            let user = new User(data)
            await user.save()
        }
    } catch (err) {
        console.error(err)
        return res.status(404).send({message:' Error '})
    }
}

export const register = async(req,res)=>{
    try {
        let data = req.body
        data.password = await encrypt(data.password)
        data.role = 'CLIENT'
        let user = new User(data)
        await user.save()
        return res.send({message: `Successful registration, Welcome ${user.username}` })
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error registerin user', err})
    }
}

export const login = async(req,res)=>{
    try {
        let {email, username, password} = req.body
        let user = await User.findOne({$or:[{username: username},{email: email}]})
        if(user && await checkPassword(password, user.password)){
            let loggedUser = {
                id: user._id,
                username: user.username,
                role: user.role
            }
            let token = await generateJwt(loggedUser)
            return res.send(
                {
                    message: `Welcome ${user.username}`,
                    loggedUser,
                    token,
                }
            )
        }        
        return res.status(404).send({message: 'Credenciales invalidas' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Failed to login'})
    }
}

export const update = async(req, res)=>{
    try {
        let {role } = req.user
        let { id } = req.params
        let data = req.body 
        if(role === 'ADMIN'){
            let updatedUserA = await User.findOneAndUpdate(
                {_id : id},
                data,
                {new: true}
                )
                if(!updatedUserA) return res.status(401).send({message: 'This user cannot be updated'})
                return res.send({message: 'Update',updatedUserA})
        }
        if(role === 'CLIENT'){
            if(id === id){
                let update = checkUpdate(data,id)
                if(!update)return res.status(400).send({message: 'There is data that cannot be updated'})
                    let updatedUser = await User.findOneAndUpdate(
                        {_id : id},
                        data,
                        {new: true}
                    )
                    if(!updatedUser) return res.status(401).send({message: 'This user cannot be updated'})
                        return res.send({message: 'Update',updatedUser})
            }else{
                return res.status(400).send({message: 'You do not have access when updating this account'})
            }              
        }
    } catch (err) {
        console.error(err)
        if(err.keyValue.username) return res.status(400).send({message:`Useraname ${err.keyValue.username} is alredy token`})
        return res.status(500).send({message: 'Error updating account'})
    }
}

export const deleteU = async(req, res)=>{
    try {
        let{role} = req.user
        let {id} = req.params
        console.log(id)
        if(role ==='ADMIN') {
            let deleteU = await User.findOneAndDelete({_id:id})
            return  res.send({message: `The user: ${deleteU.username} was successfully deleted`})
        }
        if(role ==='CLIENT'){
            if(uid === id){
                let deleteU = await User.findOneAndDelete({_id:id})
                return  res.send({message: `The user: ${deleteU.username} was successfully deleted`})
            }else{
                return res.status(400).send({message:'You cannot delete an account that is not yours'})
            }
        }
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting account'})
    }
}