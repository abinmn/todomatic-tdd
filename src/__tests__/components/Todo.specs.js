import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from '../../components/Todo';

describe("<Form />", () => {
    let getByTestId;
    let id = "test-task", name = "sleep", completed = false;
    let toggleTaskCompleted, deleteTask;

    describe("Toggle, Edit and Delete todo", () => {
        beforeEach(async () => {
            toggleTaskCompleted = jest.fn().mockName("toggleTaskCompleted");
            deleteTask = jest.fn().mockName("deleteTask");

            ({ getByTestId } = render(
                <Todo id={id} name={name} completed={completed} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask}/>
            ));
        });

        it("check if task rendered", () => {
            expect(getByTestId("test-name")).toHaveTextContent(name);
        });

        it("toggle task", () => {
            userEvent.click(getByTestId("test-checkbox"));
            expect(toggleTaskCompleted).toHaveBeenCalledWith(id);
        });
        
        it("delete task", () => {
            userEvent.click(getByTestId("test-delete"));
            expect(deleteTask).toHaveBeenCalledWith(id);
        });

    });
});
