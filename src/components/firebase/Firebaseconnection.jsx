import React, { Component } from 'react'
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyAqJxHn19Ol_uaPbeeW9oe8d5J72RIMErU",
  authDomain: "register-864c6.firebaseapp.com",
  databaseURL: "https://register-864c6-default-rtdb.firebaseio.com",
  projectId: "register-864c6",
  storageBucket: "register-864c6.appspot.com",
  messagingSenderId: "789411042816",
  appId: "1:789411042816:web:4bfd4f57850eff1f3d2ae5"
};

export default class Firebaseconnection extends Component {
  render() {
    return (
      <div>Firebaseconnection</div>
    )
  }
}
