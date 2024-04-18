import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        minLength: [8, 'Password must be 8 charters'],
        required: true
    },
    rol:{
        type: String,
        uppercase: true,
        enum: ['ADMIN','CLIENT'],
        required: false
    },
    state:{
        type: Boolean,
        required: false
    }
})

export default mongoose.model('user',  userSchema)