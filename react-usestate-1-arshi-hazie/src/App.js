import React, { useState } from "react";
import "./App.css";
import { bootcampers, compliments } from "./bootcampers";

/*

Now try and repeat the outcome of task one, but this time with a random compliment as well as the bootcamper names. There's an array of compliments in [here](./src/bootcampers.js) that you may have noticed earlier. Feel free to add to the array with more compliments. Make a new piece of state, and a separate `<p>` tag to display the compliment alongside the name you've generated in task one.
*/

function ListItem({ bootcamper, compliment }) {
  return (
    <li style={{ textAlign: "left" }}>
      <span>{bootcamper}</span>
      <span> </span>
      <span>{compliment}</span>
    </li>
  );
}

function List({ children }) {
  return <ul>{children}</ul>;
}

function App() {
  const [bootcamperIndex, setBootcamperIndex] = useState(0);
  const [complimentIndex, setComplimentIndex] = useState(0);

  function handleClick() {
    const randomComplimentIndex = Math.floor(
      Math.random() * compliments.length
    );
    const randomBootcamperIndex = Math.floor(
      Math.random() * bootcampers.length
    );
    setBootcamperIndex(randomBootcamperIndex);
    setComplimentIndex(randomComplimentIndex);
  }

  const pStyle = {
    color: "black",
    textAlign: "center",
    backgroundColor: "mediumpurple",
    border: "1px solid goldenrod",
  };

  const buttonStyle = {
    padding: "1rem",
    color: "white",
    backgroundColor: "mediumpurple",
  };

  return (
    <div className="App">
      <h1>React useState</h1>
      <p style={pStyle}>{bootcampers[bootcamperIndex]}</p>
      <p style={pStyle}>{compliments[complimentIndex]}</p>
      <button style={buttonStyle} onClick={handleClick}>
        Click me for a random bootcamper!
      </button>
      <List>
        <ListItem
          compliment={compliments[complimentIndex]}
          bootcamper={bootcampers[bootcamperIndex]}
        ></ListItem>
      </List>
    </div>
  );
}

export default App;
