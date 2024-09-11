const express=require('express')
const route=express.Router()

const userModel=require('../models/usermodel')


route.get('/',(req,res)=>{
    userModel.find({}).then((user)=>{
        res.json(user)
    })
})

route.post('/add',async (req,res)=>{
    const data=new userModel({
        "username":req.body.username,
        "password":req.body.password
    })

    try{
        await data.save()
        console.log("sucess")
        res.json(data)
    }
    catch{
        console.log("Error")
    }
})

route.put('/findu',(req,res)=>{
    userModel.find({
        "username":req.body.uname,
        "password":req.body.pass
    }).then((user)=>{
        const [d]=user
        res.send(d._id)
    })
})


module.exports=route