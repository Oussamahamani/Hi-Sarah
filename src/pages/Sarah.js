import React, { useRef } from 'react'
import { useState, useEffect } from 'react'; 
import axios from 'axios'
import { useTranslator} from '../hooks/useTranslator';
import { useDetector} from '../hooks/useDetector';
import Chat from './chat';
import { useSpeechSynthesis } from "react-speech-kit";

import "./Sarah.css"

const Sarah = () => {
    const { speak,cancel } = useSpeechSynthesis();
    const speaking = (item) =>{
        cancel()
       speak({ text: item })
    }
    const [Messages, setMessages] = useState([]);
    const [Message, setMessage] = useState('');
    const [Send, setSend] = useState('');
    const [Sara, setSara] = useState('');
const [Languageto, setLanguageto] = useState('');
const [Last, setLast] = useState('');
const [Writing, setWriting] = useState(false);
const [timenow, settimenow] = useState();
const [messagetime, setmessagetime] = useState();
const [visit, setvisit] = useState(false);
const [user, setuser] = useState();


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


useEffect(() => {
    
if (Translation){fetchSara()
// console.log(Translation,Translation)}
}
}, [Translation]);

const fetchSara = async () => {
    const options = {
        method: 'GET',
        url: 'https://http-cors-proxy.p.rapidapi.com/http://api.brainshop.ai/get',
        params: {bid: '163410', key: 'hWlvyscvNLHzjlmQ', uid: user, msg: Translation},
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
        console.log('sending request to sara')
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

const [chance, setchance] = useState(false);


///when user visits page
useEffect(() => {
    settimenow(Date.now())
    let username = localStorage.getItem('user')
     if (typeof(username )=== 'string') { console.log('user assigned');setuser(username);console.log('here',typeof(username))}
     else if (typeof(username ) === 'object') {console.log('new user for first time');checkuser();console.log('username',username,typeof(username))
    }
    const time = JSON.parse(localStorage.getItem('time'))
    setvisit(true)
    setmessagetime(time)
    const localData = JSON.parse(localStorage.getItem('Messages'));
    if (localData){
        setMessages(localData)
    }else console.log('error')
    console.log(localData)
}, []);

const checkuser = ()=>{
    const random = Math.floor(Math.random() * 10000)
        setuser(random)
        localStorage.setItem('user', JSON.stringify(random))
        console.log('user new', random)
}



const howmuchtime = ()=>{
    
    const timepassed =(timenow-messagetime)/1000
    console.log( 'time passed', timepassed)
    //  Addmessages(`it has been ${Math.floor(timepassed)} seconds since we last talked`, false)
    if (timepassed> 3600 & timepassed< 86400){
        Addmessages(`hey,it has been ${Math.floor(timepassed/3600)} hours since we last talked, I am still available and happy to talk`, false)
    }else if (timepassed > 86400 &&  timepassed< 432000000){
        Addmessages(`hey, it has been ${Math.floor(timepassed/86400)} days since we last talked, how have you been ?`, false)
        
    }
    
}

useEffect(() => {
    howmuchtime()
    setchance(true)
    
}, [visit]);

const scrollSpan= useRef();
useEffect(() => {
    if (chance){
        localStorage.setItem('Messages', JSON.stringify(Messages))
        setmessagetime(Date.now())
        localStorage.setItem('time', JSON.stringify(messagetime))
        
    }
    console.log('messge')
    scrollSpan.current.scrollIntoView({ behavior: "smooth" });}, [Messages]);



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
            {Messages && Messages.map(message=>(
                // {message.writer && (<h1> message.name</h1>)}
                message.writer ?(
                <div className='messages human'>
                <p>{message.name}</p>
                </div>)
               :(
                    <div className='messages robot'>
                <p onClick={() =>{speaking(message.name)}} >{message.name}</p>
                </div>
                )
                ))}
                {Writing && (
            <div className='messages robot'>
                <p>...</p>
                </div>
            ) }
                      <span ref={scrollSpan}></span>
                </div>
            </div>
          
          <form onSubmit={handleSubmit}>
                <label id='form' >            
                <input id='input' type='text' onChange={(e)=> setMessage(e.target.value)} value={Message}></input>
                <button id= 'submit'>send message</button>
                </label>
            </form>
            </div>
            </div>
    );
}

export default Sarah;
