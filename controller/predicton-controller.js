const Coal=require('../model/coal')
const Natural_gas=require('../model/natural_gas')
const Petroleum=require('../model/petroleum')

const coal= async (req,res,next)=>{
    let getCoalData
    try{
         getCoalData= await Coal.find()
         
    }catch{
        console.log('error')
    }
    res.json({coal:getCoalData})
}

const natural_gas=async (req,res,next)=>{
    let getnatural_gasData
    try{
        // console.log("hiii");
         getnatural_gasData= await Natural_gas.find()
         
    }catch{
        console.log('error')
    }
    res.json({coal:getnatural_gasData})
}

const petroleum=async (req,res,next)=>{
    let getpetroleumData
    try{
         getpetroleumData= await Petroleum.find()
         
    }catch{
        console.log('error')
    }
    res.json({coal:getpetroleumData})
}

exports.coal=coal
exports.natural_gas=natural_gas
exports.petroleum=petroleum
