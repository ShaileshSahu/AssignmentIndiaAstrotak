
const USER_CONSTANT = {

    SUCCESS: { 

        USER_INFORMATION: {
            status: 200,
            message: 'User profile information.',
        },

        USER_PROFILE_UPDATED: {
            status: 200,
            message: 'User profile updated.'
        }
    },

    ERROR: {
        USER_INFORMATION: {
            status: 400,
            message: 'Failed to fetch the user information'
        },

        USER_UPDATE_ERROR: {
            status: 400,
            message: 'Unable to update profile. Please try again.'
        }
    }

};

export default USER_CONSTANT;