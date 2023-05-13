const mongoose=require('mongoose')

const coalSchema=new mongoose.Schema({
    date:{type:Date},
    high:{type:Number,required:true},
    lower:{type:Number,required:true}
})

module.exports= mongoose.model('Coal',coalSchema)