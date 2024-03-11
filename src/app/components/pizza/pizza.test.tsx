import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Pizza from './pizza';
import mockData from '../../data/_mockPizzaList';

describe('Pizza', () => {
  it('renders the pizza component with expected data', () => {
    render(<Pizza {...mockData[0]} />)

    const pizza = screen.getByTestId('pizza');
    expect(pizza).toBeInTheDocument();

    const restaurantName = screen.getByRole('heading', { level: 3 });
    expect(restaurantName).toBeInTheDocument();
  });

})
