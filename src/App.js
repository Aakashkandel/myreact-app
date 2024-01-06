import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './components/loginregister/Register'

import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from 'uuid';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Login from './components/loginregister/Login';

const firebaseConfig = {
  apiKey: "AIzaSyAqJxHn19Ol_uaPbeeW9oe8d5J72RIMErU",
  authDomain: "register-864c6.firebaseapp.com",
  databaseURL: "https://register-864c6-default-rtdb.firebaseio.com",
  projectId: "register-864c6",
  storageBucket: "register-864c6.appspot.com",
  messagingSenderId: "789411042816",
  appId: "1:789411042816:web:4bfd4f57850eff1f3d2ae5"
};
firebase.initializeApp(firebaseConfig);


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      msg: null,
      error: null,
      email: null,
      password: null,
    });
  }
  Formregister = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Change variable name to formData
    let email = formData.get("email");
    let password = formData.get("password");
    let confirmpassword = formData.get("confirmpassword");
  
    console.log(confirmpassword);
  
    if (password === confirmpassword) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
  
        this.setState({
          msg: "You are successfully registered",
          error: 0
        });
      } catch (error) {
        
        console.log(error.code);

        if (error.code === "auth/email-already-in-use") {
      
          this.setState({
            msg: "The email address is already in use by another account.",
            error: 1
          });
        }

        if(error.code==="auth/weak-password")
        {
          this.setState({
            msg:"weak password",
            error:1
          })
        }




      }
    }
    else{
      this.setState({
        msg:"Password doesnot match",
        error:1
      })
    }
  };
  

Loginuser=async(event)=>{
    event.preventDefault();
    const formData=new FormData(event.target);
    let email=formData.get("email");
    let password=formData.get("password");
    this.setState({email,password},async()=>{
      try{
      //   const auth=await firebase.auth();
      // auth.signInWithEmailAndPassword(email,password);
    
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.setState({
        msg:"you are successfully login",
        error:0
      })

      }
      catch(error){
        console.log(error.code);
        if(error.code==="auth/invalid-credential"){
          this.setState({
            msg:"Sorry!Invalid userid and password",
            error:1,
          })
        }



      }
    })
  }
  
  render() {
    return (
      <Router>
      
      <div>

        <Routes>
          <Route path="/" element={<Register
         msg={this.state.msg}
        register={this.Formregister}
          error={this.state.error}

        />}/>
       
        <Route path="/login" element={<Login 
        log={this.Loginuser} 
        msg={this.state.msg} 
        error={this.state.error}/>}/>
        </Routes>
      </div>
      
      
      </Router>
      
    )
  }
}
