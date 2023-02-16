const app = require('./app')
const mongoose = require('mongoose')

//Pour accéder à la variable d'env
const dotenv = require('dotenv') 
dotenv.config({path:'./Backend/Config/config.env'})
const Port = process.env.PORT 

//Connection avec MangoDb
const DB = process.env.db_conn
mongoose.connect(DB,()=>console.log('Database connected'))

mongoose.set('strictQuery',true);

//tester le fonctionnement du serveur
app.listen(Port,()=>console.log(`Server is running on ${Port}`))

//lancer la commande : npm run watch