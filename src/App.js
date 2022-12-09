import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  function updateInput(e) {
    setNewTask(e.target.value);
  };

  function addTask() {
    if (newTask === "") { return; }

    setToDoList([
      ...toDoList,
      newTask
    ]);
    setNewTask("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-main">
        <div>
          <input
            type='text'
            value={newTask}
            onChange={updateInput}
            name="newTask"
            placeholder="Describe your task..."
          />
          <button onClick={addTask}>Add task</button>
        </div>
        {toDoList.length ? <ul>{toDoList.map((task, index) => <li key={index}>{task}</li>)}</ul> : 'No tasks yet'}
      </div>
      <div className="App-footer">
        <a
          className="App-link"
          href="https://testing-library.com/docs/react-testing-library/intro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Testing Library
        </a>
      </div>
    </div>
  );
}

export default App;
