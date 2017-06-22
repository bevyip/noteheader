import React from 'react'
import fbIcon from './fb-art.png'
import githubIcon from './Github-image.svg'
import googleIcon from './google-image.png'
import './SignIn.css'
import { auth, githubProvider, facebookAuthProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticateGit = () => {
    auth.signInWithPopup(githubProvider)
  }

  const authenticateFb = () => {
    auth.signInWithPopup(facebookAuthProvider)
  }

  const authenticateGoogle = () => {
    auth.signInWithPopup(googleProvider)
  }

  return (
    <div className="SignIn">
      <button
        className="SignInGoogle"
        onClick={authenticateGoogle}
      >
      <img className="Google-SignIn" src={googleIcon} alt="Google SignIn"/>
      </button>

      <button
        className="SignInFb"
        onClick={authenticateFb}
      >
      <img className="Fb-SignIn" src={fbIcon} alt="Fb SignIn" style={{"height" : "80%"}}/>
      </button>

      <button
        className="SignInGithub"
        onClick={authenticateGit}
      >
      <img className="Git-SignIn" src={githubIcon} alt="Git SignIn" style={{"height" : "90%"}}/>
      </button>

      <h6>Choose your sign-in method</h6>
    </div>
  )
}

export default SignIn