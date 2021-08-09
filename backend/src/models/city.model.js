import mongoose from 'mongoose';

 const CitySchema = mongoose.Schema({

    _id: {
        type: mongoose.ObjectId,
    },

    name: {
        type: mongoose.ObjectId,
        required: true
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
CitySchema.index({_id:1,  user_id:1 });
const City = mongoose.model('cities', CitySchema);
export default City;