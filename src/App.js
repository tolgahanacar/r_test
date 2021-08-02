import React from 'react'
import './App.css';
const App = () => {
  return (
    <div className="App">
        {/* <h1>React_Test</h1>
        <button>Test Button</button>
        <h3 className="rtest">this color is blue!</h3>
        <p>Coding by Tolgahan</p> */}
        <button data-testid="r_button" type="submit" disabled>r_sub</button>
        <fieldset disabled><input type="text" data-testid="r_input" /></fieldset>
        <a data-testid="r_link" href="https://tolgahanacar.net"  disabled>r_link</a>

    </div>
  )
}

export default App
