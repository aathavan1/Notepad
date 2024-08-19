const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://aathavan:1122@cluster0.czqzplr.mongodb.net/Notepad')

const userSchema=new mongoose.Schema({
    uid:{
        type:String,
        require:true
    },
    unote:{
        type:String,
        require:true
    }
},{versionKey:false})

const dataModel=new mongoose.model('datas',userSchema)

module.exports =dataModel