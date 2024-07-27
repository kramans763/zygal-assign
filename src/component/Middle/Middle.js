import React, { useState } from 'react'
import './Middle.css'

const Middle = () => {
    const [email,setEmail]=useState(false);
    const [emailValue,setEmailValue]=useState("");
    const [password,setPassword]=useState(false);
    const [passwordValue,setPasswordValue]=useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;

    function handleEmail(e){
        setEmailValue(e.target.value)
        if(emailRegex.test(e.target.value)){
            setEmail(true);
        }
        else{
            setEmail(false)
        }

    }

    function handlePassword(e){
        setPasswordValue(e.target.value)
        if(passwordRegex.test(e.target.value)){
            setPassword(true);
        }
        else{
            setPassword(false)
        }

    }
  return (
    <>
    <div className='middleMobileView'>
        <div className='middleAvtar'></div>
        <div className='email' style={{border:email?"2px solid green":"2px solid red"}}>
            <input type="text" value={emailValue} onChange={handleEmail}></input>
        </div>
        <div className='password' style={{border:password?"2px solid green":"2px solid red"}}>
            <input type="password" value={passwordValue} onChange={handlePassword}></input>
        </div>
      </div>
    </>
  )
}

export default Middle