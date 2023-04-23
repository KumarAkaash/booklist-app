const express =require("express");
const app=express()
const PORT=8080
const cors=require("cors")
const getConnection=require("./connection/connection")
const login=require("./routes/login")
const signup=require('./routes/signup')
const books=require("./routes/books")
app.use(cors())
getConnection()
app.use(express.json())
app.use(login)
app.use(signup)
app.use(books)

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(PORT,()=>console.log(`Sun rha hu mai on ${PORT}`));