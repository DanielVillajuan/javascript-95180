import { Router } from "express";
import { uploader } from "../util.js";

const route = Router();
const imagenes = [{
    destination: 'C:\\Users\\danie\\Documents\\Coderhouse\\backend-1-95180\\semana-5\\src/public/img',
    name: 'Captura de pantalla 2025-12-30 210256.png'
},
{
    destination: 'C:\\Users\\danie\\Documents\\Coderhouse\\backend-1-95180\\semana-5\\src/public/img',
    name: 'Captura de pantalla '
},{
    destination: 'C:\\Users\\danie\\Documents\\Coderhouse\\backend-1-95180\\semana-5\\src/public/img',
    name: 'Captura '
}]
route.get('/', (req, res) => {
    // invoco al archivo donde estan todas las rutas de las imagenes cargadas

    const imagenes = getImages()
    res.json({payload: imagenes })
})

route.post('/', uploader.single("avatar") ,(req, res)=> {
    const body = req.body
    console.log(req.file)
    // informacion de la imagen
    // obtenemos el destinacion ( strin/ruta )
    // guardamos esa ruta
    res.json({ message: "Se subio correctamente" })
})

export default route