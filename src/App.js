import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import StartingPage from "./components/StartingPage";

export default function App() {
  
  return (
    <Router>
      <div className="app">
        <div className="board">
          <Routes>
            <Route path="/quizzle_test" element={<StartingPage />}></Route>
            <Route path="/game" element={<Game/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
