import React, {useEffect, useState} from "react";
import {auth, provider} from "../firebase";
import { signInWithPopup } from "firebase/auth";

function SignUp(){
    const [value, setValue] = useState('');
    const handleClick = ()=>{
      signInWithPopup(auth, provider).then((data) => {
        setValue(data.user.email)
        localStorage.setItem("email", data.user.email)
        
      })
    }

    const signOut = ()=>{
      localStorage.clear();
      window.location.reload();
    }

    useEffect(()=>{
      setValue(localStorage.getItem('email'))
    })

    return (
      <div>
        <p>{value?<button onClick={signOut}>Sign Out</button>: <button onClick={handleClick}>Sign In</button>}</p>
        {value && localStorage.getItem('email')}
      </div>
    )
}

export default SignUp;