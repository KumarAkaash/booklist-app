const express = require('express');
const mongoose=require("mongoose")
const router = express.Router();
const USER =mongoose.model("USER");
const bcrypt = require('bcrypt');

router.post("/register",(req,res)=>{
    const{email,password}=req.body;
    USER.findOne({email:email}).then((savedUser=>{
        if(savedUser){
            return res.status(422).json({error:"user already exist with this email"})
        }
        bcrypt.hash(password,10).then(hashedpassword=>{
            const user=new USER({
               email,
               password:hashedpassword
            })
            user.save().then(user=>{
                res.json({message:"user register sucessfully"})
            }).catch(err=>{
                console.log(err)
            })
        })
    })).catch(err=>{
        console.log(err)
    })

})

module.exports=router
