import React, { useState } from "react";
import "./App.css";
import Input from "../Input";
import Item from "../Item";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1>JSX will go here!</h1>
      <Input handleChange={handleChange} />
      <Item text={text} font="Arial" />
      <Item text={text} font="Comic Sans Ms" />
      <Item text={text} font="Times New Roman" />
      <Item text={text} font="Consolas" />
      <Item text={text} font="Tahoma" />
    </div>
  );
}

export default App;


// In App.js, duplicate the item component at least three times using your Item component. 
//For each one, hand in font={}. In the {}, hand in a different font's name (just like the font names you'd use in your CSS normally) to each Item.

// Now load up, type in a word, and bask in the glory of your React typeface extravaganza!