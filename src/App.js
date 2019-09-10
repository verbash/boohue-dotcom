import React from 'react';
import logo from './BooHueCat_200x200.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <p>
          BooHue - an app for IOS and Android coming Sept 2019.
        </p>
        <a
          className="App-link"
          href="https://www.palacelogic.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          by PalaceLogic
        </a>
        <p><strong>haunt your house with Philips Hue</strong></p>
        <a
          className="App-link"
          href="https://www.facebook.com/boohueapp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BooHue facebook
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/boohueapp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @boohueapp instagram
        </a>
      </header>
    </div>
  );
}

export default App;
