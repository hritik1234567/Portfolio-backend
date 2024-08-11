const express=require('express')
const { submitController } = require('../Controllers/formController');


const router=express.Router()


router.post('/submit',submitController);



//
module.exports = router;