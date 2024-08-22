const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/Notepad')

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