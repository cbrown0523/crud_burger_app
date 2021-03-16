import React from "react";
import Burger from './components/Burger';
import firebase from './components/firebase';
import "./index";



function App() {
  return (
    <div className="App">
      <span className="title">Burger App</span> <br />
      <Burger />
    </div>
  );
}

export default App;
