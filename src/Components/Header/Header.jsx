import React from 'react';
import './Header.css';

function Header() {
  return (
    <div id="header">
      <a className="headerButton" href="/cards">CARDS</a>
      <a className="headerButton" href="/arms">ARMS</a>
      <a className="headerButton" href="/agents">AGENTES</a>
      <a className="headerButton headerInit" href="/">INICIO</a>
      <a className="headerButton" href="/maps">MAPS</a>
      <a className="headerButton" href="/sprays">SPRAYS</a>
      <a className="headerButton" href="/titles">TITULOS</a>
    </div>
  );
}

export default Header;
