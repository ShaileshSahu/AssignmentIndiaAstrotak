import {SANDBOX} from './secret.util.js';


// REST API Logger system and it's handling !!!
export const logger = (req,res,next) => {
    if (SANDBOX != 'true') {
        res.locals.startTime = Date.now();
        console.log(' ---------------------- Request Details -----------------------');
        console.log("Req Type ", req.method);
        console.log("Req IP ", req.connection.remoteAddress);
        console.log("headers ", req.headers);
        console.log("authorization ", req.headers["authorization"]);
        console.log("Accepted language ", req.headers["accept-language"]);
        console.log("user-agent ", req.headers["user-agent"]);
        console.log("Host ", req.headers["host"]);
        console.log("Req Params ", req.params);
        console.log("Req Query ", req.query);
        console.log("Req body", req.body);
        console.log("Req url", req.url);
        console.log("Req files", req["files"]);
        console.log("----------------------- END ------------------------------------"); 
       
    }
    next();
};