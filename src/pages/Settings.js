import React, { Component } from "react";
import  UserContext from './../../src/context/DataContext'
import { useContext } from 'react';
import Footer from "../components/Footer";
import "./Settings.css"

 function Settings() {
  const { Delete, setDelete } = useContext(UserContext);
  console.log('status is',Delete)

  const deletestuff= ()=>{
    setDelete(true)
  }
    return (
      <div>

      <div id="reset-container" >
        <h1>To delete all the messages click at the button</h1>
        <button onClick={deletestuff}>Delete Messages</button>
        {/* <h1>{Messages[1].name}</h1> */}
      </div>
        < Footer />
      </div>
    );
  }


export default Settings;
