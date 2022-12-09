import { fireEvent, queryByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Opening fresh page', () => {

  test('should render an input', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument;

  });

  test('should render a button', () => {
    render(<App />);
    expect(screen.getByRole('button')).toBeInTheDocument;
  });

  test('page starts without the to do list', () => {
    render(<App />);
    expect(screen.queryByRole('list')).toBeNull();
  });

  test('page starts without tasks', () => {
    render(<App />);
    expect(screen.queryByRole('listitem')).toBeNull();
  });

  test('page starts with "No tasks yet" message', () => {
    render(<App />);
    expect(screen.getByText('No tasks yet')).toBeInTheDocument;
  });
});

describe('Adding a new task', () => {

  test('should render a HTML list', () => {
    render(<App />);
    userEvent.type(screen.getByRole('textbox'), 'Estudar testes');
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByRole('list')).toBeInTheDocument();
  });

  test('should render a new task', () => {
    render(<App />);
    userEvent.type(screen.getByRole('textbox'), 'Estudar testes');
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByRole('listitem')).toBeInTheDocument();
  });

  test('should render all tasks listed', () => {
    render(<App />);
    userEvent.type(screen.getByRole('textbox'), 'Estudar testes');
    fireEvent.click(screen.getByRole('button'));
    userEvent.type(screen.getByRole('textbox'), 'Estudar pra entrevistas');
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryAllByRole('listitem').length).toEqual(2);
  });

  test('should not render "No tasks yet" message', () => {
    render(<App />);
    expect(screen.queryByText('No tasks yet')).toBeNull;
  });
});
