import "./App.css";
import {useState} from "react";

function App() {

  const [myValue, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleInputChange}/>
      {myValue}
    </div>
  );
}


export default App;
