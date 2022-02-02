import React from 'react';
import { useState, useEffect } from 'react'; 
import axios from 'axios'


const Sarah = () => {

const [Message, setMessage] = useState('');
const [Sara, setSara] = useState('');
const [Messages, setMessages] = useState([]);


const Addmessages =(message) =>{
    setMessages((preMessages)=>{
        return [...preMessages, {name:message }]
    })
}
const fetchSara = async () => {
    try {
        const response = await axios.get(`https://api.brainshop.ai/get?bid=163410&key=hWlvyscvNLHzjlmQ&uid=[1]&msg=${Message}`,{headers:{
            'Access-Control-Allow-Origin' : '*', }})
                console.log(response.data.cnt)
                setSara(response.data.cnt)
            } catch (error) {
                console.error(error)
                console.log('not working')
    } 
}

useEffect(() => {
    Addmessages(Sara)

}, [Sara]);
const handleSubmit =(e) =>{
e.preventDefault()
Addmessages(Message)
fetchSara()
setMessage('')

}
    return (
        <div>
            {Messages.map(message=>(
                <div>
                <h3>{message.name}</h3>
                </div>
            ))}
 
          <form onSubmit={handleSubmit}>
                <label >            
                <input type='text' onChange={(e)=> setMessage(e.target.value)} value={Message}></input>
                <button>send message</button>
                </label>
            </form>
        </div>
    );
}

export default Sarah;
