const mongoose=require('mongoose')

const petroleumSchema=new mongoose.Schema({
    date:{type:Date},
    high:{type:Number,required:true},
    lower:{type:Number,required:true}
})

module.exports= mongoose.model('Petroleum',petroleumSchema)