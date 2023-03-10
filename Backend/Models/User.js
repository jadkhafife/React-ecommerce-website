const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
  username: { 
    type: String,
    required: true,
    unique: true 
    },
  email: { 
    type: String,
    required: true,
    unique: true 
    },
   password: { 
      type: String, 
      required: true 
    },
  date: {
    type:Date,
    default: Date.now
  },
  role:{
    type:Boolean,
    default: false
  }
});
module.exports = mongoose.model('User',UserSchema)