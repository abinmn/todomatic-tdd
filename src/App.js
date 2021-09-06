import React, {useState} from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

function App(props) {

  function addTask(name) {
    console.log(name);
  }

  return (
    <div>
      <Form addTask={addTask} />
      <Todo/>
    </div>
  );
}

export default App;
