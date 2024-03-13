import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import PizzaController from './pizza-controller';
import mockData from '../../data/_mockPizzaList';

describe('PizzaController', () => {
  it('renders the menu bar and pizza list', () => {
    render(<PizzaController pizzaData={mockData} />)

    const menuBar = screen.getByTestId('menu-bar');
    expect(menuBar).toBeInTheDocument()

    const pizzaList = screen.getByTestId('pizza-list');
    expect(pizzaList).toBeInTheDocument()
  });

  it('will show only pizzas from the level selected with the filter', () => {
    render(<PizzaController pizzaData={mockData} />)

    const selectInput = screen.getByTestId('pizza-level-control');
    fireEvent.change(selectInput, { target: { value: 2 } })

    const totalPizzas = screen.getAllByTestId('pizza').length;
    expect(totalPizzas).toEqual(1)
  });

})
