import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from '../components';
import '@testing-library/jest-dom/extend-expect';

test('Table renders "No data to display" when no data is provided', () => {
  render(<Table data={[]} />);
  expect(screen.getByText('No data to display')).toBeInTheDocument();
});

test('Table renders data correctly', () => {
  const testData = { firstName: 'John', lastName: 'Doe', email: 'john@example.com', message: 'Hello world' };
  render(<Table data={testData} />);
  
  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('Doe')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
  expect(screen.getByText('Hello world')).toBeInTheDocument();
});