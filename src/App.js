import React, { useState } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import "tailwindcss/tailwind.css";

import "./App.css";
const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="App">
      {!isSubmitted ? <SignUp submitForm={submitForm} /> : " "}
    </div>
  );
};
export default App;
