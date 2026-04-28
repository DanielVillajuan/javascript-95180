import fs from 'fs'
import path from 'path'
import http from 'http'

const producto = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        "rating": {
            "rate": 3.9,
            "count": 120,
            "comments": [
                {
                    description: "Buen producto",
                    user: {
                        id: "8aln243a-d34",
                        nombre: "Daniel",
                        apellido: "Fefe",
                        alias: "dn1F"
                    },
                    rate: 4.0
                }
            ]
        }
    }


    // if(fs.existsSync("test.json")){
    //     const data = fs.readFileSync("test.json", "utf-8")
    //     const dataParsed = JSON.parse(data)
    //     dataParsed.id = 2
    //     console.log(dataParsed.title) // 1
    //     fs.writeFileSync("test.json", JSON.stringify(dataParsed), 'utf-8')

    // }else {
    //     fs.writeFileSync("test.json", JSON.stringify(producto), 'utf-8')
    // }


    // const url = path.join('data','test.json')

    // console.log(url)

    // // ruta absoluta, ruta dinamica


    // // path especifico de un archivo dentro de la maquina
    // // C://username/dvilla/download/coderhouse/semana3


    // // "../../../index.jsx"

    const server = http.createServer((req, res)=> {
// req otda la informacion de quien nos hace la peticion.
// res todos los metodos necesarios para constuirar una respueta sobre la peticio
console.log("recibi una peticion")
console.log(req)
        res.end('Hola buenas noches respondiendo desde una peticion')
    })

    server.listen(8080, () => {
        console.log("Server ON!")
    })