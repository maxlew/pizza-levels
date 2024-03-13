import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Star from './star';

describe('Star', () => {
  it('renders a the star SVG', () => {
    render(<Star />)

    const svg = screen.getByTestId('rating-star');

    expect(svg).toBeInTheDocument()
  });

  it('renders a filled star by default', () => {
    render(<Star />)

    const svg = screen.getByTestId('rating-star');

    expect(svg).toHaveClass('text-yellow-300')
  });

  it('renders a darker star to denote half filled', () => {
    render(<Star style="Half" />)

    const svg = screen.getByTestId('rating-star');

    expect(svg).toHaveClass('text-yellow-50')
  });

  it('renders a dark star to denote empty', () => {
    render(<Star style="Empty" />)

    const svg = screen.getByTestId('rating-star');

    expect(svg).toHaveClass('text-gray-500')
  });
})
