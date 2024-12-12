import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./components/Todos";

// Importing logo from src folder (if it's in the src folder)
import logo from './1.png';  // Replace with your correct path

// Importing FaTasks icon from react-icons/fa
import { FaTasks } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo above the main heading */}
        <img className="app-logo" src={logo} alt="Taskflow" /> {/* Logo here */}

        {/* Main Heading with a Subtle Animation */}
        <h1 className="text-heading">
          <i>
            <FaTasks /> Get Things Listed <FaTasks />
          </i>
        </h1>

        {/* Subheading */}
        <p className="app-subheading">
          <i>Master your tasks and make productivity effortless!</i>
        </p>
      </header>

      <main>
        {/* Pass Todos Component */}
        <Todos />
      </main>

      {/* Footer with subtle animation */}
      <footer className="App-footer">
        <p>
          <i>Created with 💙 by Om Gupta</i>
        </p>
      </footer>
    </div>
  );
}

export default App;
