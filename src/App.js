import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import WordleGame from "./Components/WordleGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/wordle" element={<WordleGame />} />
      </Routes>
    </Router>
  );
}

export default App;
