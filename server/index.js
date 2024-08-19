const express = require('express')
const cors = require('cors')
const dataModel = require('./models/dataModel')

const app = express()

app.use(cors(
    {
        origin: "https://notepad-client-two.vercel.app"
        // methods: ["POST", "GET","PUT","DELETE"]
        // credentials: true

    }
))
app.use(express.json())

app.use('/user', require('./routes/user'))
app.use('/view', require('./routes/view'))

app.get('/test', (req, res) => {
    dataModel.find({

    }).then((user) => {
        res.json(user)
        if (user) {
            console.log("sucess")
        }
        else {
            console.log("fail")

        }
    })
})

app.listen(3001, () => {
    console.log("server is running")
})