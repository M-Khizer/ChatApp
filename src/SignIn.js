import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";


export default function SignIn({auth}) {

  const signInWithGoogle=()=>{
    const provider = new GoogleAuthProvider(auth)
    signInWithPopup(auth,provider)
  }

  console.log(auth.currentUser)

  return (
    <div className='signIn'>
        <button onClick={signInWithGoogle} className="signIn-btn">Continue with Google 
          <img src='google.png' />
        </button>

    </div>
  )
}
