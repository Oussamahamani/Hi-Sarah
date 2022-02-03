import React from 'react';
import { useState, useEffect } from 'react'; 
import axios from 'axios'
import { useTranslator } from '../hooks/useTranslator';


const Chat = ({Message}) => {

//   if(Message){
//     const {Translation, Language} = useTranslator(Message)

//   }  

// useEffect(() => {
//     if(Message){

// console.log(Translation,Language)
//     }
// }, [Message]);

    return (
        <div>
               {/* {Messages.map(message=>(
                <div>
                <h3>{message.name}</h3>
                </div>
            ))} */}
        </div>
    );
}

export default Chat;
