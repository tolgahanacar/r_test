// src/App.js
import React from 'react';
import './App.css';

const App = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log("Link tıklama devre dışı bırakıldı.");
  };

  return (
    <div className="App">
      {/* Buton */}
      <button data-testid="r_button" type="submit" disabled>
        r_sub
      </button>

      {/* Input alanı disabled */}
      <fieldset disabled>
        <input type="text" data-testid="r_input" placeholder="Giriş devre dışı" />
      </fieldset>

      {/* Link için tıklamayı engelle */}
      <a
        data-testid="r_link"
        href="https://tolgahanacar.net"
        onClick={handleLinkClick}
        style={{ color: 'gray', pointerEvents: 'none', cursor: 'default' }}
      >
        r_link
      </a>
    </div>
  );
};

export default App;
