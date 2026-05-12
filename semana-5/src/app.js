import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './util.js'
import ViewRoute from './routes/views.js'
import UsuariosRoute from './routes/usuarios.js'
import AvatarRoute from './routes/avatar.js'

const app = express()

app.use('/view/static', express.static(__dirname + '/public'))
app.engine('handlebars', handlebars.engine())

app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')



app.use('/',ViewRoute)
app.use('/api/usuarios', UsuariosRoute)
app.use('/api/avatar', AvatarRoute)

app.listen(8080, () => {
    console.log("Server on 8080")
})