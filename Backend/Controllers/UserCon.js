let User = require("../Models/User")
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv') 
dotenv.config({path:'../Backend/Config/config.env'})

//-----------------------Register-----------------------------
exports.register = async(req,res) =>{
    const email = await User.findOne({email: req.body.email})
    if(email) return res.status(401).send("email existe")
    //---------------------Hashage---------------------
     const salt = await bcrypt.genSalt(5)
     const hashPwd = await bcrypt.hash(req.body.password, salt)
    //----------------------------------------------------------

    const user = new User({
        "name": req.body.name,
        "username": req.body.username,
        "email": req.body.email,
        "password": hashPwd
    })
    try {
        await user.save()
        res.status(200).json({
            "success":"user saved",
            "user": user
        })
    } catch (error) {
        console.log(error)
    }
}

//------------------Login--------------------
exports.login = async(req,res)=>{
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('user not found')
    //----------------------------------------------------------
    const pwdValid = await bcrypt.compare(req.body.password, user.password)
    if(!pwdValid) return res.status(400).send('pswd incorrect')

    //--------------------token-------------------------------
    const token = jwt.sign({_id:user._id}, process.env.SECRET_TOKEN, {expiresIn:'3600s'})
    res.header('auth-token', token).send(token)
}

exports.test = async (req,res) =>{
    res.status(200).json({
        "success":"acces autorise"
    })
}

exports.getAllUsers =async(req, res)=>{
    const users= await  User.find()
    res.status(200).json({
        success:true,
        count:users.length,
        users 
    })
}

exports.addUser = async(req, res)=>{
    const user = new User(req.body)
    await user.save()
    res.status(200).json({
        success:true,
        user
    })
}