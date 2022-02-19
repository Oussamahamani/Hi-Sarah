<h1 align="center">
  <br>
 <img src="https://i.imgur.com/CjUpcdH.png" alt="sarah-icon" width="500">
  <br>
  HiSarah!
  <br>
</h1>
<h4 align="center">Chat with the smartest chatbot</h4>

<div align="center">

Try it [Here](https://hisarah.netlify.app/)   

</div>



<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-does-hisarah-work">How does HiSarah work</a> •
  <a href="#credits">Credits</a> 
   <br>
<img width="100%" src="https://github.com/Oussamahamani/Hi-Sarah/blob/main/src/pictures/demo2.gif" >
</p>




## Key Features

* Smart 
  - Sarah can talk with you in any topic, and can converse like a human.
* Lasting Memory
  - Sarah remembers everything you tell her like your name, interests, and other stuff.
  - Sarah also remember the last time you talked, so when you visit the page again she tells it has been this long since you last talked.
* Dynamic language change
  - Unlike other apps where you have to change the language in settings, just talk in any language and Sarah will undertand you and answer in the same language.
* Multi language support
  - Sarah can talk in a record 104 languages more than siri and alexa combined.
* Sarah voice
  - Sarah can speak like a human by clicking at the messages 
* Voice to chat
  - Sarah can also listen to you, click at the microphone, speak and sarah will understand you.
  - this feature is supported only on chrome
* Mobile friendly
  - you can talk with sarah both on your laptop and phone. 


## How does HiSarah work

* Sarah is created by using <a href="https://brainshop.ai/">brainshop</a> api. When a user sends a message, the website fetches the message to brainshop api and it then shows the response back to the user.
* Dynamic language change
  - the translation is not a feature from brainshop, the translation feature is done by using a second api for translation
  - when a user writes a message, the message get fetched to the translator api, the api detects the languages and then translates the message to english, then the english translation get sent to brainshop api. after that the website checks what was the original language of the message, if it was english, it renders Sarah response in the screen and shows to the user, if it was in another language, the translator api get called again but this time, it translate Sarah response to the original language of the user message, then the website after receiving response, shows it it to the user.
 * Sarah voice is done by using npm package <a href=" https://www.npmjs.com/package/react-speech-kit"> react speech kit </a> 
 * Voice to chat is done by using npm package [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition) 


 
## Credits

This website used the following packages and services:

- [brainshop](https://brainshop.ai/)
- [react-speech-kit](https://www.npmjs.com/package/react-speech-kit)
- [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition)
- [Sarah icon](https://dribbble.com/shots/7212262-Chatbot-Avatar)
- [Microsoft Translator Text](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text/)
- [HTTP Cors Proxy](https://rapidapi.com/pgarciamaurino/api/http-cors-proxy/)  has been used to bypass Cors error








