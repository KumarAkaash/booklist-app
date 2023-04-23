const mongoose=require("mongoose")

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },

},{timestamps:true})

const bookModel=mongoose.model("BOOK",bookSchema);
module.exports=bookModel