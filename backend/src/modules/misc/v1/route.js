import express from 'express';
import miscController from './controller.js';
import {success,error} from '../../../utils/index.js';
const Router = express.Router();

// Router for family and it's handling !!

const Path = '/location';

// Router for getting family list information!!
// Need to implement the validator and required field !!
Router.get('/place',  async (req,res) => {
    try {
        const {inputPlace: place } = rq.query;
        const result = await miscController.placeList({place});
        return success(result,res);
    } catch (err) {
        return error(err,res);
    }

});

export  { Path, Router };

