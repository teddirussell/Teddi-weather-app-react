import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">
        <div className="container">
          <Weather defaultCity="New York" />

          <footer>
          This project was coded by Teddi Russell
          and is{" "}
          <a
            href="https://github.com/teddirussell/teddi-weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://harmonious-brigadeiros-101803.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
        </div>
        </div>
  );
}
