export class Common {
    constructor(model){
        this.model = model
    }

    async getAll(){
        const result = await this.model.paginate({},{sort: {nombre: 1}, populate: {
            path: "materias.materiaId",
            select: "descripcion cupo inscriptos"
        }})
        return result
        try{
        }catch (e){
            return null
        }
    }

    async getById(id){
        const result = await this.model.findById(id).populate({path: "materias.materiaId", select: "descripcion cupo isncriptos"})
        return result
        try{
        }catch (e){
            return null
        }
    }

    async create(object){
        try{
            const result = await this.model.create(object)
            return result
        } catch(e){
            return null
        }
    }

     async update(id, objectUpdate){
        try{
            const result = await this.model.findByIdAndUpdate(id,objectUpdate, {returnDocument : 'after'})
            return result
        } catch(e){
            return null
        }
    }

    async delete(id){
        try{
            const result = await this.model.deleteOne({ _id: id })
            return result
        } catch(e){
            return null
        }
    }
}