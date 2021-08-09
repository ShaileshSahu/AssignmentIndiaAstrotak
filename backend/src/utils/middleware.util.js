import {CONSTANT } from '../constant/index.js';
import {jwtTokenVerify} from '../utils/common.utils.js';

export const success = async (payload, res) => {
    const responsePayload = Object.assign({
        status: payload.status ? payload.status : 200,
        message: payload.message || 'Success',
        data: payload.data || [],
        available: payload.available || false
    });
    return res.status(payload.status || 200).json(responsePayload);
};

export const error = async (payload, res) => {
    console.log('--- error via api ----', payload);
    const responsePayload = Object.assign({
        status: payload.status ? payload.status :  500,
        message: payload.message ? payload.message: 'Failed!',
        data: payload.data ? payload.data : []
    });
    return res.status(payload.status || 500).json(responsePayload);
};

export const validator = (schema, property) => {
    return (async (req,res,next) => {
        try {
            const body = req[property];
            if (!body) next();
            const result = schema.validate(body);
            console.log('---- result of validation', result);
            if(result.error == null) next();
            else {
                const { details } = result.error; 
                const message = details.map(i => i.message).join(',');
                const errorPayload = {...CONSTANT.ERROR.VALIDATION_ERROR,...{data:message} };
                return error(errorPayload, res);
            }    
        } catch (error) {
            console.log('--- error are printing ---', error);
            return error({},res);
        }
    });
}

// Authorization check of user and it's handling !!
export const auth = async (req,res,next) => {
    try {
        if (!req.headers.authorization) return error(CONSTANT.ERROR.PROVIDE_AUTH_TOKEN,res);
        const authToken = req.headers.authorization.replace("Bearer").trim();
        const data = jwtTokenVerify(authToken);
        if (data.fail && !data.tokenData) return error( CONSTANT.ERROR.INVALID_AUTH_TOKEN,res);
        // Fetch the information from user!!
        const user = await Users.findOne({_id: data.tokenData._id });
        if (!user) return error(res, CONSTANT.ERROR.INVALID_AUTH_TOKEN);
        res.locals.user = user;
        return next();
    } catch (err) {
        return error(err,res);
    }


}