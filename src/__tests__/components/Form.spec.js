import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../../components/Form';

describe('<Form />', () => {
    let getByTestId;
  
    describe('clicking the send button', () => {
      beforeEach(async () => {
        ({ getByTestId } = render(<Form />));
  
        userEvent.type(
              getByTestId('test-todo-input'),
              'New Task'
          );
        userEvent.click(getByTestId('test-task-add-button'));
      });
  
      it('clears the text field', () => {
        expect(getByTestId('test-todo-input').value).toEqual('');
      });
    });
  });