import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import PizzaList from './pizza-list';
import mockData from '../../data/_mockPizzaList';

describe('PizzaList', () => {
  it('renders the pizza list with pizzas inside', () => {
    render(<PizzaList pizzaList={mockData} />)

    const pizzaList = screen.getByTestId('pizza-list');
    expect(pizzaList).toBeInTheDocument()

    const totalPizzas = screen.getAllByTestId('pizza').length;
    expect(totalPizzas).toEqual(4)
  });

})
