import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ToDoList from './ToDoList';

global.fetch = jest.fn();
const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('Test ToDoList component', () => {
  beforeEach(() => jest.clearAllMocks());

  it('Should render list items when api responds', async () => {
    mockFetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          results: [
            {
              id: 1,
              name: 'aaron'
            }
          ]
        })
    } as any);
    render(<ToDoList />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    await waitFor(() => {
      screen.getByText('aaron');
    });
  });

  it('Should render list items when api fails', async () => {
    mockFetch.mockRejectedValue({});
    render(<ToDoList />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    await waitFor(() => {
      screen.getByText('Unable to fetch');
    });
  });
});
