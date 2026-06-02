import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { AlumnoModel } from './models/alumnos.model.js'
import { AlumnoDao } from './models/dao/Alumno.dao.js'
dotenv.config()

const AlumnoService = new AlumnoDao(AlumnoModel)

const app = express()
app.use(express.json())

app.get('/alumnos', async (req, res) => {

    const resultado = await AlumnoService.getAll()

    res.json({
        payload: resultado
    })
})

app.get('/alumnos/:id', async (req, res) => {
    const id = req.params.id
    try{
        const resultado = await AlumnoService.getById(id)
        res.json({
            payload: resultado
        })
    } catch (e) {
        res.status(404).json({
            payload: "error id no existe"
        })
    }
})

app.post("/alumnos", async (req, res) => {
    const {nombre, apellido, email, dni, direccion} = req.body

    if(!nombre || !apellido || !email || !dni){
        return res.status(404).json({payload: "Te falto un parametro"})
    }

   try{
    const resultado = await AlumnoService.create({
            nombre,
            apellido,
            email,
            dni,
            direccion: direccion || ""
        })

    return res.status(201).json({payload: resultado})
   }catch(e){
    if(e.message.includes("duplicate")){
        return res.status(400).json({payload: "key duplicada"})
    }
    res.status(400).json({payload: "error"})
   }
})


app.put("/alumnos/:id", async (req, res) => {
    const id = req.params.id
    const body = req.body

    const resultado = await AlumnoService.update(id, body)

    res.json({ payload: resultado })
})

app.delete("/alumnos/:id", async (req, res) => {
    const id = req.params.id
    await AlumnoService.delete(id)

    res.json({ payload: "usuario eliminado" })
})

mongoose.connect(process.env.MONGO_KEY, { dbName: 'Codermouse'})
.then(()=>{
    console.log("Base de datos conectada")
})

app.listen(8080, () => {
    console.log("Servidor ON en 8080")
})