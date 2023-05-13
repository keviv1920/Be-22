// const express=require("express")
const Feedback=require('../model/feedback')


DUMMY_SUBMITTED_USERS=[]
const feedback= async (req,res)=>{
    // console.log("hihii made req",req.body);
    const {name , email , message}=req.body
    
    try{
        const submittedUser=new Feedback({
            name,
            email,
            message
        })
        await submittedUser.save()
        // console.log("savedddd");
    }catch(err){
        console.log(err);   
    }
        
       
    res.json({message:"Message send succesfully!"})
    // next()
}

exports.feedback=feedback