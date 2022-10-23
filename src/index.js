import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import Git from "./Git";

import "./Weather.css";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <Git />
    </div>
  </StrictMode>
);
