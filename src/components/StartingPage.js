import React from "react";
import { Link } from "react-router-dom";

export default function StartingPage() {
  return (
    <div className="start">
      <div className="start--detail">
        <h1 className="start--title">Welcome to the Quiz Game</h1>
        <p className="start--announce">
          You Only Got One Try - You Won't Die If You Lose
        </p>
        <p className="start--relief">"trust me bro"</p>
      </div>
      <Link to="/game">
        <button className="start--btn">Start Game</button>
      </Link>
    </div>
  );
}
