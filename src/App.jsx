import "./App.css";
import {useState} from "react";

function App() {

  const [showText, setShowText] = useState(true);

  return (
    <div>
      <button onClick={() => {setShowText(!showText)}}>{!showText ? "SHOW" : "HIDE"}</button>
      {showText && <h1>Hi, my name is Sudarshan</h1>}
    </div>
  );
}


export default App;
