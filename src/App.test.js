import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('teste do App', () => {
  test('Deve renderizar o componente App', () => {
    render(<App />)
    expect(screen.getByText('Cadastrar')).toBeInTheDocument()
  })
  test('Deve adicionar uma tarefa', () => {
    const {debug} = render(<App />)
    fireEvent.change(screen.getByTestId('campo-tarefa'), {
      target: {
        value: 'Estudar React'
      }
    })
    fireEvent.click(screen.getByTestId('btn-cadastrar'))
    expect(screen.getByText('Estudar React')).toBeInTheDocument()
    debug()
  })
})