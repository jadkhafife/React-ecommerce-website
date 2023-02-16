const mongoose = require('mongoose')
const VoyageSchema = mongoose.Schema(
{
    Ville:{
        type:String,
        required:true,
        trim:true
    },
    Photo:{
        type:String,
        required:true
    },
    Duree:{
        type:Number,
        required:true
    },
    Date:{
        type:String,
        required:true,
        trim:true 
    },
    
    Prix:{
        type:Number,
        required:true
    }
}
)

module.exports = mongoose.model('Voyage',VoyageSchema)