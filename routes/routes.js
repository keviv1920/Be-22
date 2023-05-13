
const express=require('express')
const predictionController=require('../controller/predicton-controller')
const feedbackConroller=require('../controller/feedback-controller')

const router= express.Router()

router.get('/prediction/coal',predictionController.coal)

router.get('/prediction/naturalgas',predictionController.natural_gas)

router.get('/prediction/petroleum',predictionController.petroleum)

router.post('/feedback',feedbackConroller.feedback)

module.exports=router


