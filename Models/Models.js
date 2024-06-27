const express = require("express")
const { default: mongoose } = require("mongoose")

const UserSchema = new mongoose.Schema({
   
    name: {
        type: String,
        require: true
    },
    notes: {
        type: Number,
        require: true
    }
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel;