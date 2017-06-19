import React from 'react'

import './SignIn.css'
import { auth, githubProvider, facebookAuthProvider } from './base'

const SignIn = () => {
  const authenticateGit = () => {
    auth.signInWithPopup(githubProvider)
  }

  const authenticateFb = () => {
    auth.signInWithPopup(facebookAuthProvider)
  }

  return (
    <div className="SignIn">
      <button
        className="SignInGithub"
        onClick={authenticateGit}
      >
        Sign In With GitHub
      </button>
      <button
        className="SignInFb"
        onClick={authenticateFb}
      >
        Sign In With Facebook
      </button>
    </div>
  )
}

export default SignIn