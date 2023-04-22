import Keyboard from "./components/Keyboard";
import "./App.css";
import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);

  function playFun(evt) {
    setStarted(true);
    evt.target.classList.remove("playbtn");
  }
  return (
    <div className="App playbtn" onClick={playFun}>
      {started ? <Keyboard /> : "Play"}
    </div>
  );
}

export default App;
