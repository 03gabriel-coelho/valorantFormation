import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [hoverState, setHoverState] = useState(false);

  return (
    <header id="header">
      <a className="headerButton headerLeftButtons" href="/cards">CARDS</a>
      <a className="headerButton headerLeftButtons" href="/arms">ARMAS</a>
      <a className="headerButton headerLeftButtons" href="/agents">AGENTES</a>
      <div
        id="divHeaderInit"
      >
        <a
          href="/"
          id="lineOne"
        >
          { ' ' }
        </a>
        <a
          onMouseEnter={ () => setHoverState(true) }
          onMouseLeave={ () => setHoverState(false) }
          href="/"
          id="poligonOne"
          style={
            hoverState
              ? { borderBottom: '30px solid #80C5B3' }
              : { borderBottom: '30px solid #E3E8F1' }
          }
        >
          { ' ' }
        </a>
        <a
          className="headerButton headerInit"
          href="/"
          id="headerInit"
          onMouseEnter={ () => setHoverState(true) }
          onMouseLeave={ () => setHoverState(false) }
          style={
            hoverState
              ? { color: '#E3E8F1', backgroundColor: '#80C5B3' }
              : { color: 'black', backgroundColor: '#E3E8F1' }
          }
        >
          INICIO
        </a>
        <a
          href="/"
          id="poligonTwo"
          onMouseEnter={ () => setHoverState(true) }
          onMouseLeave={ () => setHoverState(false) }
          style={
            hoverState
              ? { borderBottom: '30px solid #80C5B3' }
              : { borderBottom: '30px solid #E3E8F1' }
          }
        >
          { ' ' }
        </a>
        <a
          href="/"
          id="lineTwo"
        >
          { ' ' }
        </a>
      </div>
      <a className="headerButton headerRigthButtons" href="/maps">MAPAS</a>
      <a className="headerButton headerRigthButtons" href="/sprays">SPRAYS</a>
      <a className="headerButton headerRigthButtons" href="/titles">TITULOS</a>
    </header>
  );
}

export default Header;
