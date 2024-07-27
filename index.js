const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const UserModel = require('./Models/Models')

const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://aathavan:1122@cluster0.czqzplr.mongodb.net/crud");

app.get("/view",((req,res)=>{
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
            res.json(err)
    })
}))

app.post("/add", async (req, res) => {

    const data = new UserModel({
        "name": req.body.name,
        "notes": req.body.notes,
    })
    try {
        await data.save()
        res.status(200).json({
            "message": data
        })
    } catch {
        res.status(500).json({
            "message": "error"
        })
    }

})


app.delete("/del:id", async (req, res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            "message": "sucess"
        })

    }
    catch {
        res.status(500).json({
            "message": "error"
        })
    }

})





app.listen(3001,()=>{
    console.log("Server running");
})
