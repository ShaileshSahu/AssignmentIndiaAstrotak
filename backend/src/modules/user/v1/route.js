import express from 'express';
import userController from './controller.js';
import {success,error,auth} from '../../../utils/index.js';
const Router = express.Router();

// Router for users and it's handling !!

const Path = '/users';

// Router for getting user profile information!!
Router.get('/', auth, async (req,res) => {
    try {
        const result = await userController.user(res.locals.user);
        return success(result,res);
    } catch (err) {
        return error(err,res);
    }

});

// Router for updating the profile!!
Router.post('/', auth, async (req,res) => {
    try {
        const {  name, dob, tob, place_of_birth, gender, address, state, city,pincode,language,mobile_number,dialing_code, marital_status } = req.body;
        const result = await userController.updateUser({
            name,dob,tob, place_of_birth, gender, address, state, city,pincode,mobile_number,dialing_code,
            language, marital_status,
        });
        return success(result,res);
    } catch (err) {
        return error(err, res);
    }
});
export  { Path, Router };

