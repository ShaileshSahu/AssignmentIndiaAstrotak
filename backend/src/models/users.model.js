import mongoose from 'mongoose';

 const UserSchema = mongoose.Schema({

    _id: {
        type: mongoose.ObjectId,
    },

    email: {
        type: String,
        required: true,
        minLength: 7,
    },

    phone_number:{
        type: String,
        required: true
    },

    language:{
        type: String
    },

    tob: {
            minute: {
                type: Number,
            },

            second: {
                type: Number,
            },

            type: {
                type: String,
                enum: ['am','pm']
            }

    },

    marital_status: {
        type: String,
        enum: ['single', 'married', 'divorced'],
        default: 'single'
    },

    place_of_birth: {
        type:String
    },

    address: {
        type: String
    },

    state: {
        type: String
    },

    city: {
        type: String
    },

    pincode: {
        type: String,
        required: true
    },

    dob: {
        type:String,
        required: true,
    },

    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    }
 });
UserSchema.index({_id:1,  email:1 });
const Users = mongoose.model('users', UserSchema);
export default Users;