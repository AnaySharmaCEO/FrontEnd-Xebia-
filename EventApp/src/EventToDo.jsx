import { useState } from "react";
import './EventToDo.css'
import Search from './Search';

export default function EventToDo()
{  
   const[task,setTask]=useState("");
   const[tasks,setTasks]=useState([]);
   const [searchTerm, setSearchTerm] = useState("");


 function handleSubmit(e) {
    e.preventDefault();

    const taskValue = task.trim();

    if (taskValue === "") {
      alert("Cannot add empty task");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, taskValue]);
    setTask("");
  }

  function handleDelete(index) {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );
  }

  const filteredTasks = tasks.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );


    return(
        <div className="todo-container">
      <h1>To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <Search value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <ul>
        {filteredTasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button
              className="deleteBtn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
);
}
