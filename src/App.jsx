import "./App.css";
import { User } from "./User";

function App() {
  const name = <h1>Sudarshan</h1>;

  const age = 25;

  const isGreen = false;

  const names = ["Sudarshan", "Stark", "Peter", "Mohit", "Aman"];

  const users = [
    { name: "Sudarshan", age: 25 },
    { name: "Badal", age: 26 },
    { name: "Amish", age: 27 },
  ];

  return (
    <div>
      <h1>Hello World</h1>
      {name}
      <User name="Sudarshan Shah" age={25} email="sudarshanshah911@gmail.com" />
      <User name="Henry Cavil" age={40} email="henrycavil@gmail.com" />

      {/* Conditional rendering */}
      {age >= 18 ? (
        <h1 style={{ color: isGreen ? "green" : "red" }}>Eligible to Vote</h1>
      ) : (
        <h1>You are not an Adult</h1>
      )}

      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}

      {users.map((user, key) => {
        return (
          <h1 key={key}>
            <User name={user.name} age={user.age} email={"no-reply@email.com"}/>
          </h1>
        );
      })}
    </div>
  );
}


export default App;
