import React from "react";
import { useState, useEffect } from "react";
import banner from "./../banner.png";
import sarahpic from "./../Sarah.png";
import slide1 from "./../slide4.png";
import slide2 from "./../slide3.png";
import slide3 from "./../Component 2.png";

import "./Home.css";
import Chat from "./../components/Chat";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <img id="img-bnr" src={banner} alt="fdf" />
      <div id="pic-container">

      <img className="pics"src={slide2} alt="fdf" />
      <img className="pics"src={slide1} alt="fdf" />

      </div>
      <div id='home-color'>

      {/* <Chat>
        <div id="container-flex">
        <div className="messages human-home ">
        <p>Why sarah</p>
        </div>
        <div className="messages robot-home ">
          <p>
            Sara is the smartest bot that can converse with you seamlessy in any topic
          </p>
          </div>
          <div className="messages human-home ">
          <p>Why should i talk with sarah</p>
          </div>
        <div className="messages robot-home ">
          <p>
          You are bored, and want to talk with somebody, maybe you feel lonely, or even you want to confide to someone
          </p>
        </div>
          <div className="messages human-home ">
            <p>what can i talk to sara about </p>
          </div>
        <div className="messages robot-home ">
          <p>
          you can with sara about anything, your favorite movie, something you did, try asking sarah for a joke
          </p>
        </div>
        </div>
      </Chat> */}
      <Chat>
        <div id="container-flex">
          <img id="sarahpic" src={sarahpic} alt="" />
          <div className="messages robot saramessage">
            <p>hello, my name is Sarah, nice to meet you, what is your name?</p>
          </div>
        </div>
        <form id="home-form">
          <input
            type="text"
            id="input-home"
            placeholder="Type your message"
            className="human"
          />
        </form>
      </Chat>
          </div>
          {/* <img className="picse"src={slide3} alt="fdf" /> */}

< Footer />
    </div>
  );
}
