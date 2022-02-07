import React from "react";
import sarahpic from "./../Sarah.png";

const Chat = (props) => {
  return (
    <div>
      {/* <div id="chat-box"> */}
        {/* <div id="chat-container"> */}
          {props.children}
        </div>
      // </div>
    // </div>
  );
};

export default Chat;
