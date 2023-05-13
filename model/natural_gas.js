const mongoose=require('mongoose')

const natural_gasSchema=new mongoose.Schema({
    date:{type:Date},
    high:{type:Number,required:true},
    lower:{type:Number,required:true}
})

module.exports= mongoose.model('Natural_gas',natural_gasSchema)