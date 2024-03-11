import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import MenuBar from './menu-bar';

describe('MenuBar', () => {
  it('renders the Menu Bar without controls when no props passed', () => {
    render(<MenuBar />)

    const menuBar = screen.getByTestId('menu-bar');

    expect(menuBar).toBeInTheDocument()
  });

  it('renders the controls when control functions are passed', () => {
    const levelChangeFn = jest.fn();

    render(<MenuBar pizzaLevelFilter={0} setPizzaLevelFilter={levelChangeFn}/>)

    const selectInput = screen.getByTestId('pizza-level-control');

    expect(selectInput).toBeInTheDocument()
  });

  it('passes the selected element up to the parent via the setPizzaLevelsFilter prop', () => {
    const levelChangeFn = jest.fn();

    render(<MenuBar pizzaLevelFilter={0} setPizzaLevelFilter={levelChangeFn}/>)

    const selectInput = screen.getByTestId('pizza-level-control');
    fireEvent.change(selectInput, { target: { value: 2 } })

    expect(levelChangeFn).toHaveBeenCalledWith(2)
  });
})
