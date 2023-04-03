import React from "react";
import hamburger from '../imgs/burger.png';

export default function Chatroom() {
  return (
    <div>
      <div className="background">
        <div className="page-nav">
          <div className="page-nav-name">
            <p className="h6 text-light m-0">Chatrooms</p>
            <p className="p-0">Get a room Nickname!</p>
          </div>
          <div className="hamburger-menu">
          <img class="hamburger" src={hamburger} />
          </div>
        </div>
      </div>
    </div>
  );
}
