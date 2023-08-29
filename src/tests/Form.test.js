import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from '../components';
import '@testing-library/jest-dom/extend-expect';

test('Form renders correctly', () => {
  render(<Form />);
  expect(screen.getByTestId('form-component')).toBeInTheDocument();
  expect(screen.getByText('First name')).toBeInTheDocument();
  expect(screen.getByText('Last name')).toBeInTheDocument();
  expect(screen.getByText('Email')).toBeInTheDocument();
  expect(screen.getByText('Message')).toBeInTheDocument();
  expect(screen.getByText('Submit')).toBeInTheDocument();
});

test('Submit button should be disabled by default', () => {
  render(<Form />);
  expect(screen.getByText('Submit')).toBeDisabled();
});

test('Form handles input change correctly', () => {
  render(<Form />);
  const firstNameInput = screen.getByLabelText('First name');
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  expect(firstNameInput).toHaveValue('John');
  const lastNameInput = screen.getByLabelText('Last name');
  fireEvent.change(lastNameInput, { target: { value: 'Dou' } });
  expect(lastNameInput).toHaveValue('Dou');
  const emailInput = screen.getByLabelText('Email');
  fireEvent.change(emailInput, { target: { value: 'qwe@qwe.com' } });
  expect(emailInput).toHaveValue('qwe@qwe.com');
  const messageInput = screen.getByLabelText('Message');
  fireEvent.change(messageInput, { target: { value: '1234567890' } });
  expect(messageInput).toHaveValue('1234567890');
  expect(screen.getByText('Submit')).toBeEnabled();
});
