import { nanoid } from 'nanoid';
import React, {useState} from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

function App(props) {

  const [tasks, setTasks] = useState([]);

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, name]);
  }

  function toggleTaskCompleted(id) {
    
  }

  function deleteTask(id) {
    
  }

  return (
    <div>
      <Form addTask={addTask} />
      <ul id="task-list" data-testid="test-task-list"> 
      </ul>
    
    </div>
  );
}

export default App;
