import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import Weather from "./Weather";
import Git from "./Git";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";

import "./Weather.css";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
      <Weather />
      <Git />
  </StrictMode>
);
