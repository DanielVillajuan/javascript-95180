import { Common } from "./Common.dao.js";

export class AlumnoDao extends Common {
    async getByDni(dni){
        try{
            const result = await this.model.findOne({ dni })
            return result
        } catch(e){
            return null
        }
    }
}