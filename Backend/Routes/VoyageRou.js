const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path')
// const { route } = require('../app');
const {getAllVoyages ,getOneVoyageById,addVoyage, UpdateVoyage, deleteVoyage } = require('../Controllers/VoyageCon');
const verifyToken = require('./verifyToken')

//---------stockage----------
const Storage = multer.diskStorage({
    destination:(req,filename,cb)=>{
        cb(null,'./Backend/images')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage:Storage})


//Affichage de la liste des voyages
routes.route('/Voyages').get(getAllVoyages) //http://localhost:8000/api/v1/Voyages
routes.route('/Voyage/:idVoy').get(getOneVoyageById)//http://localhost:8000/api/v1/Voyage/63a857fc70ee01d240ef3455
//routes.route('/addVoyage').post(addVoyage)// http://localhost:8000/api/v1/addVoyage
routes.post('/addVoyage', upload.single('pic') ,addVoyage)
/*
{
    "Ville":"Casablanca",
    "Durée":8,
    "Date": "17/02/2022",
    "Prix":5000
}
*/
routes.route('/Update/:NameV').patch(UpdateVoyage)
// http://localhost:8000/api/v1/Update/63a857fc70ee01d240ef3455
routes.route('/Delete/:idVoyage').delete(deleteVoyage)
// http://localhost:8000/api/v1/Delete/63a857fc70ee01d240ef3455


module.exports= routes