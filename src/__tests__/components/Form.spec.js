import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../../components/Form';

describe("<Form />", () => {
    let getByTestId;
    let addTask;

    describe("clicking the send button", () => {
        beforeEach(async () => {

            addTask = jest.fn().mockName("addTask");
            ({ getByTestId } = render(<Form addTask={addTask}/>));

            userEvent.type(
                getByTestId("test-todo-input"),
                "New Task"
            );
            userEvent.click(getByTestId("test-task-add-button"));
        });

        it("clears the text field", () => {
            expect(getByTestId("test-todo-input").value).toEqual("");
        });

        it('calls the send handler', () => {
            expect(addTask).toHaveBeenCalledWith('New Task');
        });

    });
});