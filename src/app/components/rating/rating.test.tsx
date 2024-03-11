import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Rating from './rating';
import mockData from '../../data/_mockPizzaList';

describe('Rating', () => {
  it('renders the Rating Stars', () => {
    render(<Rating rating={3} />)

    const rating = screen.getByTestId('rating-stars');
    expect(rating).toBeInTheDocument();
  });

  it('renders full and half stars when passed a decimal value', () => {
    render(<Rating rating={3.5} />)

    const svg = screen.getAllByTestId('rating-star');
    expect(svg[0]).toHaveClass('text-yellow-300')
    expect(svg[1]).toHaveClass('text-yellow-300')
    expect(svg[2]).toHaveClass('text-yellow-300')
    expect(svg[3]).toHaveClass('text-yellow-50')
    expect(svg[4]).toHaveClass('text-gray-50')
  });
})
