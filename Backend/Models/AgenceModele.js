const mongoose = require('mongoose')
const AgenceSchema = mongoose.Schema(
{
    Nom:{
        type:String,
        required:true,
        trim:true
    },
    Ville:{
        type:String,
        required:true,
        trim:true
    }
}

)

module.exports = mongoose.model('Agence',AgenceSchema)