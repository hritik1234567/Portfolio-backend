const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
    
    },
    message:{
        type:String,
        required:true,
    
    }
  
},{timestamps:true });

const Form=mongoose.model('form',formSchema);
module.exports=Form;

