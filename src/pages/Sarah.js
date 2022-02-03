import React from 'react';
import { useState, useEffect } from 'react'; 
import axios from 'axios'
import { useTranslator} from '../hooks/useTranslator';
import { useDetector} from '../hooks/useDetector';
import Chat from './chat';

import "./Sarah.css"

const Sarah = () => {

    const [Messages, setMessages] = useState([]);
    const [Message, setMessage] = useState('');
    const [Send, setSend] = useState('');
    const [Sara, setSara] = useState('');
const [Languageto, setLanguageto] = useState('');
const [Last, setLast] = useState('');
const [Writing, setWriting] = useState(false);


const {Translation, Language} = useDetector(Send)
const {Translation: LastTranslation} = useTranslator(Last,Languageto)

const Addmessages =(message,status) =>{
    setMessages((preMessages)=>{
        return [...preMessages, {name:message, writer:status }]
    })
}



const clean = () =>{
    setMessage('')
    setSara('')

}

// const fetching = async () => {
// if (Language === 'en'){
//     /// fetch sara
// }
// else{ Detectlanguage(Message, Language)
// }
// }



useEffect(() => {
    
if (Translation){fetchSara()
// console.log(Translation,Translation)}
}
}, [Translation]);

const fetchSara = async () => {
    const options = {
        method: 'GET',
        url: 'https://http-cors-proxy.p.rapidapi.com/http://api.brainshop.ai/get',
        params: {bid: '163410', key: 'hWlvyscvNLHzjlmQ', uid: '[1]', msg: Translation},
        headers: {
          origin: 'example.com',
          'x-requested-with': 'example.com',
          'x-rapidapi-host': 'http-cors-proxy.p.rapidapi.com',
          'x-rapidapi-key': '7e16663340mshbfb2c833d8dcaffp1f960fjsnc96a63bc6c4c'
        }
      };
      
      axios.request(options).then(function (response) {
          setSara( response.data.cnt)
          console.log(response.data.cnt);
          console.log('sara')

      }).catch(function (error) {
          console.error(error);
      });
}



useEffect(() => {
    if(Language === 'en'){ Addmessages(Sara,false);console.log('yes');setWriting(false)
}
    else{

        setLast(Sara)
        setLanguageto(Language)
        console.log('no')
    }

}, [Sara]);


useEffect(() => {
if(LastTranslation){
    
    console.log('finally')
    console.log(LastTranslation)
    Addmessages(LastTranslation,false)
    setWriting(false)
    clean()
}
}, [LastTranslation]);
// useEffect(() => {
// console.log(Translation)
// console.log(Language)

// fetchSara()

// }, [Translation]);

// useEffect(() => {
// console.log(Message)
// }, [Message]);

const handleSubmit =(e) =>{
    setWriting(true)
e.preventDefault()
setSend(Message)
Addmessages(Message,true)
setMessage('')

}
    return (
        <div id="chat">
        <div id="chat-box">

        <div id="chat-container">
        <div id="container-flex">
            {Messages.map(message=>(
                // {message.writer && (<h1> message.name</h1>)}
                message.writer ?(
                <div className='messages human'>
                <h3>{message.name}</h3>
                </div>)
               :(
                    <div className='messages robot'>
                <h3>{message.name}</h3>
                </div>
                )
                ))}
                </div>
            </div>
            {Writing && (<h3> Sarah is writing...</h3>) }
          <form onSubmit={handleSubmit}>
                <label >            
                <input type='text' onChange={(e)=> setMessage(e.target.value)} value={Message}></input>
                <button>send message</button>
                </label>
            </form>
            </div>
            </div>
    );
}

export default Sarah;
