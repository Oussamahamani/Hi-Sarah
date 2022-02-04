import React, { Component } from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

 function About() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

    const handleListen = event => {
      SpeechRecognition.startListening({ language: 'ar-MA' });
      if (listening) {
        SpeechRecognition.abortListening();
      }
      event.target.classList.toggle("record");
    };

    const resetListen = () => {
      SpeechRecognition.resetTranscript();
    };

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div className="container">
        <p>Red button to start/stop recording your voice.</p>
        Black button to Reset.
        <div className="wrapper">
          <button className="button start" onClick={handleListen} > record</button>
          <button className="button reset" onClick={resetListen} > reset</button>
          </div>
            {transcript}
      </div>
    );
  }


export default About;
