import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const API_URL = "https://ponychallenge.trustpilot.com/pony-challenge";

const createMaze = async () => {
  const data = await fetch(`${API_URL}/maze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "maze-width": 2,
      "maze-height": 0,
      "maze-player-name": "test",
      difficulty: 0
    })
  });
  console.log(data);
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={createMaze}>asd</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
