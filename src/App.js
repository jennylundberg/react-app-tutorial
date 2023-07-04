import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {

  const [users, setUsers] = useState([
    {name: "Jenny", message: "This is a random tweet", likes: 14},
    {name: "Alwin", message: "Carpe Diem", likes: 21},
    {name: "Axel", message: "Bananaaaas!", likes: 17},
    {name:"Lina", message:"I Like Trains", likes: 23}
  ])

  return (
    <div className="app">
      {users.map(user => (
          <Tweet name={user.name} message={user.message} likes={user.likes}></Tweet>
      ))}
    </div>
  );
}

export default App;
