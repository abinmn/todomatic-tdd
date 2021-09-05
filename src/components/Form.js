import React from "react";

const Form = (prop) => {
    return (
        <form>
            <input id="new-todo-input" type="text" />
            <button id="add-task-submit-button" type="submit">
                Add
            </button>
        </form>
    );
}

export default Form;