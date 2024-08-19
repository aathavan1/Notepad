const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://aathavan:123@cluster0.czqzplr.mongodb.net/Notepad')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{versionKey:false})

const userModel=new mongoose.model('user',userSchema)

module.exports=userModel

