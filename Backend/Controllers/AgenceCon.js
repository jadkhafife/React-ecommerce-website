//Importation du modéle
const { $where } = require('../Models/AgenceModele')
let Agence = require('../Models/AgenceModele')

//Recherche d'une agence
exports.getAllAgences =async(req, res)=>{
    const agences= await  Agence.find()
    res.status(200).json({
        success:true,
        count:agences.length,
        agences 
    })
}

exports.addAgence = async(req, res)=>{
    const _Agence = new Agence(req.body)
    await _Agence.save()
    res.status(200).json({
        success:true,
        _Agence
    })
}


exports.getOneAgenceByNom = async(req,res, next) =>{
    const _nom = req.params.nom;
    Agence.findOne({Nom:_nom}, (error, agence)=>{
        if(error){
            return res.status(400).json({
                error:'Agence non trouve'
            });
        }
        return res.json(agence);
    })
}

exports.UpdateAgence = async (req, res)=>{
    const name = req.params.Name;
    const updatedAgence = {
    Nom: req.body.Nom,
    Ville: req.body.Ville
  };

  Agence.findOneAndUpdate({ Nom: name }, { $set: updatedAgence }, (error, agence) => {
    if (error) {
      return res.status(400).json({
        error: 'Unable to update Agence'
      });
    }
    return res.json(agence);
  });
}

exports.deleteAgence = async (req, res)=>{
    const del_agence = await Agence.deleteOne(
        {_nom:req.params.NomProd}
    )
    res.status(200).json({
        success:true,
        "Result":"deleted",
        del_agence
    })
}