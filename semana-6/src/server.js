import express from 'express'
import { Server } from 'socket.io'
import path from 'path'
import handlebars from 'express-handlebars';

const app = express();
app.engine('handlebars', handlebars.engine())
app.set('views', path.join(process.cwd(), "src", "views"))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(process.cwd(), "src", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const serverExp = app.listen(8080, () => {console.log("Server on en puerto 8080")})
const socketServer = new Server(serverExp)

app.get('/', (req, res)=> {
    res.render('home', {})
})

// on -> subscribirse a un evento
const mensajeLogs = []
socketServer.on('connection', (socket) =>{
    console.log("Se conecto a travez de socket un dispositivo con id:", socket.id)

    socket.on("mensaje", (data) => {
        console.log("Esto envio el cliente ->", data)
        mensajeLogs.push(data)
        socketServer.emit("chat-logs", mensajeLogs)
    })

    socket.on("nueva-conexion", username => {
        socket.broadcast.emit("nueva-conexion", username)
    })
})