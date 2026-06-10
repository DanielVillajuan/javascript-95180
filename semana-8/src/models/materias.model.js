import {model, Schema} from 'mongoose';

const materiasCollections = "materias"

const materiasSchema = new Schema({
    descripcion: {
        type:String,
        require: true
    },
    profesor: String,
    tutores: {
        type: Array,
        default: []
    },
    horarios: String,
    cupo: {
        type: Number,
        require: true,
        default: 100
    },
    inscriptos: {
        type: Number,
        default: 0
    },
    comision: {
        type: String,
        require: true,
        unique: true
    }
})

export const MateriasModel = model(materiasCollections, materiasSchema)