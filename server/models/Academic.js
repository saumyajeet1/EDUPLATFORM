const mongoose=require('mongoose')
require('dotenv').config()
const validator=require('validator');
const Schema = mongoose.Schema;

const academicSchema=mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    subject:{
     type:Array,
     default:[],
     required:true
    },
    images:{
        type:Array,
        default:[]
    }
    

},{timestamps:true})


const Academic=mongoose.model('Academic',awardSchema)


module.exports={Academic}