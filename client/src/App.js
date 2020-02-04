import React from "react";
import logo from "./logo.svg";
import logoG from "./logoG.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome!!</h2>

        <a
          className="App-link"
          href="/auth/google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoG} className="App-logoG" alt="logoG" />
          SignUp
        </a>
      </header>
    </div>
  );
}

export default App;

//https://reactjs.org
