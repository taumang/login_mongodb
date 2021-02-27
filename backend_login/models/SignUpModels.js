//Calling the mongoDB database
const mongoose = require('mongoose')


//This the data which is requested from the user who is signning in the application.
const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },


})
//Within the mongoose.model('Name of the table, created in mongoDB', The schema created in the first few lines of the code)
module.exports = mongoose.model('mytable',signUpTemplate)