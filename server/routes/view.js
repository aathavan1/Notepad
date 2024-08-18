const express = require('express')
const route = express.Router()
const datamodel = require('../models/dataModel')


route.get('/:id', (req, res) => {
    datamodel.find({
        "uid": req.params.id
    })
        .then((user) => {
            res.json(user)
        })
})





route.post('/add', async (req, res) => {
    const data = new datamodel({
        "uid": req.body.uid,
        "unote": req.body.unote
    })

    try {
        // console.log(data)
        await data.save()
    }
    catch {
        console.log("error")
    }
})




route.delete('/delete/:id',async (req, res) => {
    const id = req.params.id
    console.log(id)
    try{
        await datamodel.findByIdAndDelete(id)
      
    }
    catch{
        console.log("error")
    }
})

module.exports = route

