const express = require('express');
const routes = express.Router();
// const { route } = require('../app');
const {getAllAgences,addAgence, UpdateAgence,deleteAgence, getOneAgenceByNom} = require('../Controllers/AgenceCon');

//Affichage de la liste des Agences
routes.route('/Agences').get(getAllAgences)
//http://localhost:8000/api/v2/Agences
////routes.route('/Agence/:idProd').get(getOneAgenceById)
//http://localhost:8000/api/v2/Agence/63a85377cc49be3ee27ba867
routes.route('/Agence/:nom').get(getOneAgenceByNom)

routes.route('/addAgence').post(addAgence)
//    http://localhost:8000/api/v2/addAgence
routes.route('/Update/:Name').patch(UpdateAgence)
// http://localhost:8000/api/v2/Update/63a85377cc49be3ee27ba867
routes.route('/Delete/:NomPord').delete(deleteAgence)
// http://localhost:8000/api/v2/Delete/63a85377cc49be3ee27ba867


module.exports= routes