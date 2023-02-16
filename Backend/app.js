//Création du serveur
const express =require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use('/photos', express.static(path.join(__dirname+'/images')))

//localhost:8000
app.get('/',(req, res)=>{
    res.send('Hello Express')
})

//pour interagir entre le front et le backend sans avoir de soucis d'acces
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'POST, PUT, PATCH, GET, DELETE'
    })
)

//Utilisation des routes dans l'application
app.use(express.json())

const VoyageRoute = require('./Routes/VoyageRou')
app.use('/api/v1',VoyageRoute)

const AgenceRoute = require('./Routes/AgenceRou')
app.use('/api/v2',AgenceRoute)

const UserRoute = require('./Routes/UserRou')
app.use('/api/v3',UserRoute)


module.exports = app