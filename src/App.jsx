import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newtask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // creates a new array and add the newtask to it
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newtask,
    };
    setTodoList([...todoList, task]);
  };

  // // creates a new array and while filtering elements from previoi
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="addtask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return <Task key={task.id} taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
