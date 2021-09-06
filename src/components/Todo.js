import React from "react";

const Todo = (props) => {
    return (
        <li className="todo">
            <div className="stack-small">
                <div className="c-cb">
                    <input
                        id={props.id}
                        type="checkbox"
                        defaultChecked={props.completed}
                        onChange={() => props.toggleTaskCompleted(props.id)}
                        data-testid="test-checkbox"
                    />
                    <label className="todo-label" htmlFor={props.id} data-testid="test-name">
                        {props.name}
                    </label>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn" data-testid="test-edit">
                        Edit <span className="visually-hidden">{props.name}</span>
                    </button>
                    <button
                        type="button"
                        className="btn btn__danger"
                        data-testid="test-delete"
                        onClick={() => props.deleteTask(props.id)}
                    >
                        Delete <span className="visually-hidden">{props.name}</span>
                    </button>
                </div>
            </div>

        </li>
    );
}

export default Todo;