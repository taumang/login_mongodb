const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup',(req,res)=>{
    const signUpUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        
    })
    signUpUser.save()
    .then(data=>{
        res.json(data)
    }).catch(error=>{
        res.json(error)
    })
})

module.exports = router