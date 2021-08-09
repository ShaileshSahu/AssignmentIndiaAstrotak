
import City from '../../../models/city.model.js';

class MiscController {

    async placeList(place) {
        try {
            const query = {};
            if(place) { 
                const reg = new RegExp(place, 'i');
                query.name = {
                    $regex: reg
                }; }
            const cities = await City.find({user_id: payload._id});
            return  { data: cities };
        } catch (err) {
            return Promise.reject();
        }
    }


   
}
const miscController = new MiscController();
export default miscController;