import { useState, useEffect } from 'react'; 
import axios from 'axios'



export const useDetector = (Message) => {
    // const [ToLanguage, setToLanguage] = useState();
    
    const [Translation, setTranslation] = useState();
    const [Language, setLanguage] = useState();
    const [OriginalLanguage, setOriginalLanguage] = useState();


    
useEffect(() => {
    
const Detectlanguage = async () => {
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
    if (Message){
      
      Detectlanguage()
    }else{}

}, [Message]);

    return {Translation, Language}

}

