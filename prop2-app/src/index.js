import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ClassTop } from "./App";
import { ClassMid } from "./ClassMid";
import { ClassLast } from "./ClassLast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClassTop username="Akash" />
    <ClassMid username="Akash" name2="Middle class"  />
    <ClassLast username="Akash" name3="Last class prop" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
