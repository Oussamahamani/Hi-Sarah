import React from 'react';
import { useState, useEffect } from 'react'; 
import axios from 'axios'


const Sarah = () => {

const [Message, setMessage] = useState('');
const [Sara, setSara] = useState('');
const [Messages, setMessages] = useState([]);
const [Language, setLanguage] = useState();
const [Translation, setTranslation] = useState();
const [Final, setFinal] = useState();


const Addmessages =(message) =>{
    setMessages((preMessages)=>{
        return [...preMessages, {name:message }]
    })
}

const Detectlanguage = async (Translation, Language) => {
const options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    params: {'api-version': '3.0', to: 'en', textType: 'plain', profanityAction: 'NoAction'},
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
      'x-rapidapi-key': '7e16663340mshbfb2c833d8dcaffp1f960fjsnc96a63bc6c4c'
    },
    data: [{Text: Message}]
  };
  
  axios.request(options).then(function (response) {
      setTranslation(response.data[0].translations[0].text);
      setLanguage( response.data[0].detectedLanguage.language)
    //   console.log(Translation)
  }).catch(function (error) {
      console.error(error);
  });
}

const clean = () =>{
    setMessage('')
    setSara('')
    setTranslation('')
    setLanguage('')
}

// const fetching = async () => {
// if (Language === 'en'){
//     /// fetch sara
// }
// else{ Detectlanguage(Message, Language)
// }
// }


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
          console.log(response.data);
          setSara(sa => response.data.cnt)
            setMessage(response.data.cnt)
      }).catch(function (error) {
          console.error(error);
      });
    // try {
    //     const response = await axios.get(`https://thingproxy.freeboard.io/http://api.brainshop.ai/get?bid=163410&key=hWlvyscvNLHzjlmQ&uid=[1]&msg=${Message}`)
    //             console.log(response.data.cnt)
    //         } catch (error) {
    //             console.error(error)
    //             console.log('not working')
    // } 
}

useEffect(() => {
if (Translation){fetchSara()
console.log('fetch')}
}, [Translation]);


useEffect(() => {
 if (Sara){ Addmessages(Sara)
  console.log('sara')}
  clean()
}, [Sara]);

const handleSubmit =(e) =>{

e.preventDefault()
Addmessages(Message)
Detectlanguage(Message)


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
