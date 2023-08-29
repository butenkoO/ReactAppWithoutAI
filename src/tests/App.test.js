import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import { updateForm, store } from '../store';
import '@testing-library/jest-dom/extend-expect';

test('App renders correctly and handles form submission', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByTestId('app-component')).toBeInTheDocument();
  expect(screen.getByTestId('form-component')).toBeInTheDocument();
  expect(screen.getByTestId('table-component')).toBeInTheDocument();

  expect(screen.getByText('No data to display')).toBeInTheDocument();

  const firstNameInput = screen.getByLabelText('First name');
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  
  const lastNameInput = screen.getByLabelText('Last name');
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  
  const emailInput = screen.getByLabelText('Email');
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  
  const messageInput = screen.getByLabelText('Message');
  fireEvent.change(messageInput, { target: { value: 'Hello world' } });

  const submitButton = screen.getByText('Submit');
  fireEvent.click(submitButton);

  const expectedAction = updateForm({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    message: 'Hello world',
  });

  expect(store.getState()).toEqual(expect.objectContaining(expectedAction.data));

  expect(screen.queryByText('No data to display')).not.toBeInTheDocument();
  expect(screen.getByTestId('table')).toBeInTheDocument();
});
