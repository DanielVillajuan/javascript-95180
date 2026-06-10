import { model, Schema } from 'mongoose'
import mongoosePaginateV2 from 'mongoose-paginate-v2'

const alumnoColl = 'alumnos'

const alumnoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true,   
    },
    direccion: String,
    materias: {
        type: [{
            materiaId: {
                type: Schema.Types.ObjectId,
                ref: "materias"
            }
        }],
        default: []
    }
})

alumnoSchema.plugin(mongoosePaginateV2)

export const AlumnoModel = model(alumnoColl, alumnoSchema)