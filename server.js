
const express= require('express')
const mongoose=require('mongoose')
var cors = require('cors')
const bodyParser=require('body-parser')

const predictionRoutes=require('./routes/routes')

const app= express()
app.use(cors())

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  })
app.use(express.json())

app.use('/api',predictionRoutes)


const db='mongodb+srv://surajpal:Surajpal@cluster123.g3lcksk.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db)
.then(
    app.listen(8081,()=>{
    console.log('listening to port 8080 sath mai db se jude hua')
}))
.catch(err=>console.log(err))
