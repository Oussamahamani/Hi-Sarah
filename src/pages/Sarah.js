import React from 'react';
import { useState } from 'react'; 
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
        const response = await axios.get(`http://api.brainshop.ai/get?bid=163044&key=tL53y0qRo8Ztpqfv&uid=[1]&msg=${Message}`)
                console.log(response)
                setSara(response.data.cnt)
                Addmessages(Sara)      
            } catch (error) {
                console.error(error)
                console.log('not working')
    } 
}

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
