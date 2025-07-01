import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";  

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <navbar />
    <div className="container">
      <h1> ગુજરાતી Wordle માં આપનું સ્વાગત છે!</h1>
      <p>Test your Gujarati word skills in this cultural twist on the classic Wordle game!</p>
      <button className="button" onClick={() => navigate("/wordle")}>
        Start Game
      </button>
    </div>
    <footer />
    </>
  );
};

export default WelcomePage;
