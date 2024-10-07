import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <button data-testid="r_button" type="submit" disabled>r_sub</button>
        
        <fieldset disabled>
          <input type="text" data-testid="r_input" />
        </fieldset>

        {/* Link elementine disabled eklenemez, onun yerine tıklama olayını engelle */}
        <a data-testid="r_link" href="https://tolgahanacar.net" onClick={(e) => e.preventDefault()}>
          r_link
        </a>
    </div>
  );
}

export default App;
