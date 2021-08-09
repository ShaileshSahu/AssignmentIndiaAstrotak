import mongoose from 'mongoose';

 const UserFamilySchema = mongoose.Schema({

    _id: {
        type: mongoose.ObjectId,
    },

    userId: {
        type: mongoose.ObjectId,
        required: true
    },
    
    name: {
        type: String,
        required: true
    },

    tob: {
        type: Number,
        required: true
    },

    dob: {
        type:String,
        required: true,
    },

    gender: {
        type: String,
        enum: ["male", "female","other"],
        required:true
    },

    relation:{
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    status: {
        type: Boolean,
        default: true
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
 });
UserFamilySchema.index({_id:1,  user_id:1 });
const UserFamily = mongoose.model('user_families', UserFamilySchema);
export default UserFamily;