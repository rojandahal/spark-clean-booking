import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "../src/assets/vendors/brote-icons/style.css";
import "../src/assets/vendors/animate/animate.min.css";
import "../src/assets/vendors/animate/custom-animate.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
