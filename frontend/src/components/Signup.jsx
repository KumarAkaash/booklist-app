import React, { useState } from 'react';
import "./sign.css"
import {Link, useNavigate} from "react-router-dom"
function Signup() {
    const [confirmPassword, setConfirmPassword] = useState("")
    const [rem, setRem] = useState("off")
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const history=useNavigate();
  const PostData=()=>{
    if(confirmPassword!==password){
        return alert("password and confirm password must be matched")
    }
    else{
fetch("https://bookapi-vvfb.onrender.com/signup",{
    method:"post",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        email,
        password
    })
})
.then(res=>res.json())
.then(data=>{
    if(data.error){
alert(data.error)
    }else{
    history('/')}
})
.catch(error=>{
    console.log(error)
})
  }}
    return (
        <div className='container'>
            <form >
                <h1>SIGN IN</h1>
                <div className='form-inputs'>
                    <label htmlFor="email">Email adress</label>
                    <input type="email" placeholder='Enter Email' id='email'  onChange={(e) => setemail(e.target.value)} required />
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' id='password' onChange={(e) => setpassword(e.target.value)} required/>
                </div>
                <div className='form-inputs'>
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input type="password" placeholder='Enter Password' id='confirm-password' onChange={(e)=>setConfirmPassword(e.target.value)} required />
                </div>
                <div className='check-box-container'>
                    <input type="checkbox" id='check' onChange={(e)=>setRem((old)=>{return (old==="off")?"on":"off"})} required/>
                    <label htmlFor="ckeck">I AGREE WITH TERMS AND CONDITIONS
                    </label>
                </div>
                <div className='form-inputs'>
                    <button  onClick={() => {
                        PostData();
                      }} >Continue</button>
                </div>
                
                <div className='forgot'>
                    <Link to={"/"}>Sign In</Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;