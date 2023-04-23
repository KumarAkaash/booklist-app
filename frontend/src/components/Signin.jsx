import React, {useState} from 'react';
import "./sign.css"
import { json, Link, useNavigate } from 'react-router-dom';
function Signin() {
   const [rem, setRem] = useState("off")
   const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history=useNavigate();
  const PostData=()=>{
fetch("https://bookapi-vvfb.onrender.com/login",{
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
      localStorage.setItem("jwt",data.token)
      localStorage.setItem("user",JSON.stringify( data.user))
      
    history('/home')}
})
.catch(error=>{
    console.log(error)
})
  }
    return (
        <div className='container'>
            <form >
                <h1>SIGN IN</h1>
                <div className='form-inputs'>
                    <label htmlFor="email">Email adress</label>
                    <input type="email" placeholder='Enter Email' id='email' onChange={(e) => setemail(e.target.value)} required />
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' id='password'   onChange={(e) => setpassword(e.target.value)} required/>
                </div>
                <div className='check-box-container'>
                    <input type="checkbox" id='check' onChange={(e)=>setRem((old)=>{return (old==="off")?"on":"off"})} required/>
                    <label htmlFor="ckeck">Remember</label>
                </div>
                <div className='form-inputs'>
                    <button  onClick={() => {
                        PostData();
                      }}>Submit</button>
                </div>
                <div className='forgot'>
                    <p>Forgot<span style={{color:"blue"}}>password?</span></p>
                    <Link to={"/signup"}>Sign Up</Link>
                </div>
            </form>
        </div>
    );
}

export default Signin;