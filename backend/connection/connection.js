const mongoose=require('mongoose')
require("dotenv").config()

mongoose.set('strictQuery',false);
const url=process.env.MONGO_URI;
async function getConnection(){
    await mongoose.connect(url).then(()=>{
        console.log("conntected to db")
    }).catch(e=>{
        console.log("eror in connection ")
    })
}
module.exports=getConnection