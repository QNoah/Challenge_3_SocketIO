import React from "react";
import "../scss/custom.scss";

export default function Nickname() {
  return (
    <div className="background">
      <div className="page-nav-name">
        <p className="h6 text-light">Enter chatbox</p>
      </div>
      <div className="content">
        <div className="input-group-lg nickname">
          <input
            type="text"
            name="nickname"
            className="form-control nickname"
            placeholder="Nickname"
            maxLength={"20"}
          />
          <p className="text-danger text-center mt-2 mb-0">This nickname already exists. Try another.</p>
        </div>
        <div className="info-chat">
          <p>
            Here’s some information about this chat. Could be anything actually.
            Like, it’s soo cool! Oh my god, it’s amazing! Nothing beats this
            chat. Like, you can talk and other people talk back at ya!
          </p>
        </div>
      </div>
      <footer className="fixed-bottom"></footer>
    </div>
  );
}
