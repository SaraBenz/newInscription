import React, { useState } from "react";
import Inscription from "./Inscription";
import Profil from "./Profil";

import "tailwindcss/tailwind.css";

import "./App.css";
const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="App">
      {!isSubmitted ? <Inscription submitForm={submitForm} /> : <Profil />}
    </div>
  );
};
export default App;
