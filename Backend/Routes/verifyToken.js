const jwt = require('jsonwebtoken')
const dotenv = require('dotenv') 
dotenv.config({path:'../Backend/Config/config.env'})

module.exports = (req, res, next) =>{
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied')
    try {
        verifToken = jwt.verify(token, process.env.SECRET_TOKEN)
        next()
    } catch (error) {
        res.status(400).send(err.message)
    }
}