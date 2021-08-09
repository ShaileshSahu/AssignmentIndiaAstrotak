
import { responseMerge } from '../../../utils/index.js';
import Users from '../../../models/users.model.js';
import USER_CONSTANT from './constant.js';
class UserController {

    async user(payload) {
        try {
            // we have already have information of the user !!
            return responseMerge(USER_CONSTANT.SUCCESS.USER_INFORMATION, {data: payload});
        } catch (err) {
            return Promise.reject(USER_CONSTANT.ERROR.USER_INFORMATION);
        }
    }


    async userUpdate(payload) {
        try {
            const {  name, dob, tob, place_of_birth, gender, address, state, city,pincode, language,mobile_number,dialing_code, marital_status } = payload;
            const updateParameter = Object.assign({}, 
                name ? {name}: null, 
                dob ? {dob} : null, 
                tob ? {tob} : null, 
                place_of_birth ? {place_of_birth} : null,
                gender ? {gender} : null,
                address ? {address} : null,
                state ? {state} : null,
                city ? {city} : null,
                pincode ? {pincode} : null,
                language ? {language} : null,
                mobile_number ? {mobile_number} : null,
                dialing_code ? {dialing_code} : null,
                marital_status ? {marital_status}: null 
            );
            await Users.update({_id: payload._id},updateParameter);
            return USER_CONSTANT.SUCCESS.USER_PROFILE_UPDATED;
        } catch (error) {
            return Promise.reject(USER_CONSTANT.USER_UPDATE_ERROR);
        }
    }

}
const userController = new UserController();
export default userController;