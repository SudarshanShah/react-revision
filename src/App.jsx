import './App.css';
import PropTypes from 'prop-types';

function App() {

  const name = <h1>Sudarshan</h1>;

  const age = 25;

  return (
    <div>
      <h1>Hello World</h1>
      {name}
      <User name="Sudarshan Shah" age={25} email="sudarshanshah911@gmail.com" />
      <User name="Henry Cavil" age={40} email="henrycavil@gmail.com" />

      {/* Conditional rendering */}
      {age >= 18 ? <h1>Eligible to Vote</h1> : <h1>You are not an Adult</h1>}
    </div>
  )
}

const User = (props) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <h2>Email : {props.email}</h2>
    </div>
  )
}

// validation for props field in User component
User.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  email : PropTypes.string
}

export default App
