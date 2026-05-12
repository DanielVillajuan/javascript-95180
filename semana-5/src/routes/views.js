import { Router } from "express";

const route = Router();

route.get('/', (req, res)=> {
    res.render('home', { imagenes } )
})

route.get('/perfil', (req, res)=> {

    res.render('perfil', {
        username: "Daniel",
        email: "ddvv@hotmail.com"
    })
})

const users = [
    { username: "dniel", email:"asd@asd.com"},
    { username: "mraf", email:"merafcrack@asd.com"},
    { username: "pepe123", email:"apepe@asd.com"}
]

route.get('/usuarios', (req, res)=> {

    res.render('usuarios', {
        payload: users,
        isAuth: false
    })
})


export default route