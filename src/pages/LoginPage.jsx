import React from 'react'
import {auth, provider} from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const signInWithGoogle = async ()=>{
    const result = await signInWithPopup(auth, provider); //provider is the Google Auth & auth is the instance provided by firebase app

    navigate('/')
    console.log(result)
  }
  return (
    <div>
      <p>Sign In with Google to continue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    
  )
}

export default LoginPage