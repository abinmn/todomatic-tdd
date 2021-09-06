import React, { useState } from "react";

const Form = (props) => {
    const [name, setName] = useState("");

    function handleInput(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="new-todo-input"
                data-testid="test-todo-input"
                type="text"
                value={name}
                onChange={handleInput}
            />
            <button id="add-task-submit-button" data-testid="test-task-add-button" type="submit">
                Add
            </button>
        </form>
    );
}

export default Form;