
const FAMILY_CONSTANT = {

    SUCCESS: { 

        FAMILY_LIST: {
            status: 200,
            message: 'Family list.',
        },

        FAMILY_CREATED: {
            status: 201,
            message: 'Family Added.'
        }
    },

    ERROR: {
        Family_ALREADY_EXIST: {
            status: 409,
            message: 'Failed to fetch the user information'
        },

        FAMILY_CREATE_ERROR: {
            status: 400,
            message: 'Unable to update profile. Please try again.'
        }
    }

};

export default FAMILY_CONSTANT;