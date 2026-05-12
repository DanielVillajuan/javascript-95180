import { Router } from "express";

const route = Router();

const users = [
    { username: "dniel", email:"asd@asd.com"},
    { username: "mraf", email:"merafcrack@asd.com"},
    { username: "pepe123", email:"apepe@asd.com"}
]

route.get('/', (req, res)=> {
    res.json({ payload: users })
})


export default route