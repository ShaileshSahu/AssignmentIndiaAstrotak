export const CONSTANT = {

    ERROR: {
        GATEWAY_ERROR: {
            status: 500,
            message: 'Gateway Error!!',
        },

        PROVIDE_AUTH_TOKEN : {
            status: 400,
            message: 'Provide the Auth token.'
        },

        INVALID_AUTH_TOKEN: {
            status: 401,
            message: 'Invalid token provided.'
        }

    },

    REQ_TYPE: {
        BODY: 'body',
        PARAMS: 'params',
        QUERY: 'query',
        HEADERS: 'headers'
    },

  
}