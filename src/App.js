import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./container/sign_up/sign-up";
import Home from "./container/home/home";

function App() {
  return (
    <div>
      <Home />
      <SignUp />
    </div>
  );
}

export default App;
