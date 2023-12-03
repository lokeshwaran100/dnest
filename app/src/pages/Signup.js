import React,{ useContext } from 'react'
import {Redirect} from 'react-router-dom'
// import firebase from 'firebase'
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import GoogleButton from 'react-google-button'
// import Navbar from '../Components/navbar'
import { useWeb3React } from '@web3-react/core';
import { injected } from '../utils/connector';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Components/navbar';  
import { Button } from 'react-bootstrap';

export default function Signup() {
  const { activate, active, account, deactivate } = useWeb3React();

// var provider = new firebase.auth.GoogleAuthProvider();

// const googleAuth = () => {
//    firebase.auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     // var credential = result.credential;
//     // var token = credential.accessToken;
//     // The signed-in user info.
//     // var Signeduser = result.user;
//     toast(`Welcome ${result.user.displayName}`,{type: "success"})
//   }).catch((error) => {
//     // Handle Errors here.
//     // var errorCode = error.code;
//     var errorMessage = error.message;
//     // var email = error.email;
//     // var credential = error.credential;
//     toast(errorMessage, { type: "error"});
//     // ...
//   });
// }

// useEffect(() => {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       context.setUser({email: user.email, uid: user.uid})
//     }
//   });
// }, [])


  // if (context.user == null) {
  //   return (
  //     <div>
  //     <ToastContainer/>
  //     <ToastContainer/>
  //     <Navbar/>
  //     <GoogleButton className="align-self-center mx-auto auth-btn" onClick={googleAuth}/>
  //     </div>
  // )
  // } else {
    if(active)
    {
      return (
        <Redirect to="/home" />
    )
    }
    else{
      return (
      <div>
      <ToastContainer/>
      <ToastContainer/>
      <Navbar/>
      <div className='d-flex justify-content-center align-items-center vh-100'>
      <Button className="align-self-center mx-auto auth-btn" onClick={() => activate(injected)}>Connect</Button>
      </div>
      </div>
      )
    }
    
  // }
   
}
