import React from "react";
import Tweet from "./Tweet";

function App() {

  return (
    <div className="app">
      <Tweet name="Jenny" message="This is a random tweet"></Tweet>
      <Tweet name="Alwin" message="Carpe Diem"></Tweet>
      <Tweet name="Axel" message="Bananaaaas!"></Tweet>
      <Tweet name="Lina" message="I Like Trains"></Tweet>
    </div>
  );
}

export default App;
