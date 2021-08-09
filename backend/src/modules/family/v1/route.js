import express from 'express';
import familyController from './controller.js';
import {success,error,auth} from '../../../utils/index.js';
const Router = express.Router();

// Router for family and it's handling !!

const Path = '/relative';

// Router for getting family list information!!
// Need to implement the validator and required field !!
Router.get('/all', auth, async (req,res) => {
    try {
        const result = await familyController.list(res.locals.user);
        return success(result,res);
    } catch (err) {
        return error(err,res);
    }

});

// Router for create family!!
Router.post('/', auth, async (req,res) => {
    try {
        const {  name, tob,  gender,dob, relation} = req.body;
        const result = await familyController.createFamily({
            name,dob,tob, gender,relation,user: res.locals.user
        });
        return success(result,res);
    } catch (err) {
        return error(err, res);
    }
});
export  { Path, Router };

