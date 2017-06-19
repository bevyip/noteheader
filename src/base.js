import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBOi56BkvCGDIv1oiY0_6OaD82go6lXYP8",
    authDomain: "noteheader.firebaseapp.com",
    databaseURL: "https://noteheader.firebaseio.com",
    projectId: "noteheader",
    storageBucket: "",
    messagingSenderId: "351497347246"
})

const db = database(app)

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()

export default Rebase.createClass(db)