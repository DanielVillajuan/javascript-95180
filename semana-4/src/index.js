// Endpoint de usuarios -> /api/usuarios 

import express from 'express'
import fs from 'fs'
import { v4 as uuidv4 } from "uuid";
const app = express();

app.use(express.json()) // con esto podemos obtener el json de manera correcta
app.use((req, res, next) => {
    const fecha = new Date()
    console.log(`${fecha.toLocaleString()} - ${req.method} -`)

    next()
})


// MIDDLEWARE

app.get('/api/usuarios', (req, res)=> {
    const usuarios = fs.readFileSync('test.json','utf-8')
    const usuariosParseados = JSON.parse(usuarios)
    res.send({payload: usuariosParseados})
})

app.get('/api/usuarios/:id', (req, res)=> {
    const usuarios = fs.readFileSync('test.json','utf-8')
    const usuariosParseados = JSON.parse(usuarios)
    const id = req.params.id
    
    const usuarioEncontrado = usuariosParseados.find(usuario => {
        return usuario.id === id
    })

    if(usuarioEncontrado){
        res.status(200).json({status:"ok", payload: usuarioEncontrado })
        return;
    }

    res.status(404).json({ status: "fail", payload: "No se encontro el usuario" })
})

app.post('/api/usuarios', (req, res)=>{
    const { nombre, apellido, edad, domicilio } = req.body
    const usuarios = fs.readFileSync('test.json','utf-8')
    const usuariosParseados = JSON.parse(usuarios)

    if(!nombre || !apellido || !edad || !domicilio){
        res.status(400).json({status: "fail", payload: "faltan campos requeridos"})
        return;
    }

    const nuevoId = uuidv4()

    usuariosParseados.push({id: nuevoId, nombre, apellido, edad, domicilio})

    fs.writeFileSync('test.json', JSON.stringify(usuariosParseados))

    res.json({status: "ok", payload: "usuario creado"})
})

app.put('/api/usuarios/:id',(req, res)=>{
    const body = req.body
    const id = req.params.id
    // deberiamos de pisar la informacion del usuario por id y luego almacenarla en el archivo
})

app.listen(8080, () => {
    console.log("Servidor ON en puerto 8080")
})