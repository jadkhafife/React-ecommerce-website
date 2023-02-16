//Importation du modéle
let Voyage = require('../Models/VoyageModele')

//Recherche d'une agence
exports.getAllVoyages =async(req, res)=>{
    const voyages= await  Voyage.find().sort({_id:'desc'})
    res.status(200).json({
        success:true,
        messsage:voyages.length,
        voyages
    })
}

exports.addVoyage = async(req, res)=>{
    const _Voyage = new Voyage({
        Ville: req.body.Ville,
        Photo:req.file.filename,
        Duree: req.body.Duree,
        Date:req.body.Date,
        Prix:req.body.Prix
    })
    await _Voyage.save()
    res.status(200).json({
        success:true,
        _Voyage
    })
}

exports.getOneVoyageById = async(req, res)=>{
    const _idv = req.params.idVoyage;
    const voyage = await Voyage.findOne({
        _id:_idv
    })
    res.status(200).json({
        success:true,
        voyage
    });
}

exports.UpdateVoyage = async (req, res)=>{
    const ville = req.params.NameV;
    const updatedVoyage = {
    Ville: req.body.Ville,
    Duree: req.body.Duree,
    Date: req.body.Date,
    Prix: req.body.Prix
  };

  Voyage.findOneAndUpdate({ Ville: ville }, { $set: updatedVoyage }, (error, voyage) => {
    if (error) {
      return res.status(400).json({
        error: 'Unable to update Voyage'
      });
    }
    return res.json(voyage);
  });
}
exports.deleteVoyage = async (req, res)=>{
    const del_voyage = await Voyage.deleteOne(
        {_id:req.params.idVoyage}
    )
    res.status(200).json({
        success:true,
        del_voyage
    })
}