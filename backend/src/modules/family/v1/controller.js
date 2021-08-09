
import { responseMerge } from '../../../utils/index.js';
import FAMILY_CONSTANT from './constant.js';
import Family from '../../../models/user_family.model.js';
class FamilyController {

    async family(payload) {
        try {
            const families = await Family.find({user_id: payload._id});
            return responseMerge(USER_CONSTANT.SUCCESS.USER_INFORMATION, { data: families });
        } catch (err) {
            return Promise.reject(USER_CONSTANT.ERROR.USER_INFORMATION);
        }
    }


    async createFamily(payload) {
        try {
            const { name, tob,  gender,dob, relation, user } = payload;
            const exist = await Family.findOne({name});
            if (exist) return Promise.reject(FAMILY_CONSTANT.ERROR.FAMILY_EXISTS);
            const updateParameter = Object.assign({}, 
                name ? {name}: null, 
                dob ? {dob} : null, 
                tob ? {tob} : null, 
                gender ? {gender} : null,
                relation ? {relation} : null,
                user ? {user_id: user.id} : null
            );
            await Family.update({_id: payload._id},updateParameter);
            return FAMILY_CONSTANT.SUCCESS.FAMILY_CREATED;
        } catch (error) {
            return Promise.reject();
        }
    }

}
const familyController = new FamilyController();
export default familyController;