import React from "react";
import "./styles.css";

export default function Header(){
  return(
    <>
      <div className="header"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Rick and Morty Wiki" title="Rick and Morty Wiki"></img></div>
      <nav className="menu">
      <li><a href="/">Main</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/characters">Characters</a></li>
      </nav>
      <br/>
    </>
  )
}