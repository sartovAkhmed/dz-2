import React, { useState } from "react";
import { Square } from "./componetns/Square";
import "./App.css"

function App() {
  const [colors, setColor] = useState(['red', 'blue'])
  function hundlerClick() {
      if (colors[0] === 'red') {
        setColor(['blue', 'red'])
      } else {
        setColor(['red', 'blue'])
      }
  }
  return (
    <div className="App">
      <Square onClickColor={hundlerClick} color={colors[0]}/>
      <Square onClickColor={hundlerClick} color={colors[1]}/>
    </div>
  );
}

export default App;
