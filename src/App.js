import { nanoid } from 'nanoid';
import React, {useState} from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

function App(props) {

  const [tasks, setTasks] = useState([]);

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    
  }

  function deleteTask(id) {

  }

  const taskList = tasks
  .map(
    task => <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  );

  return (
    <div>
      <Form addTask={addTask} />
      <ul id="task-list" data-testid="test-task-list"> 
        {taskList}
      </ul>
    
    </div>
  );
}

export default App;
