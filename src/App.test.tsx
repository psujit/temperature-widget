import App from './App'
import { render, screen, userEvent } from './test/testUtils'

describe('Temperature Widget', () => {
  const user = userEvent.setup()

  it('should verify the form is rendered', () => {
    render(<App />)
    expect(screen.queryByText('Target Temperature')).toBeDefined()
  })

  it('should verify the current target temperature is set to default temperature of 66', () => {
    render(<App />)
    expect((screen.getByPlaceholderText('Target Temperature') as HTMLInputElement).value).toBe('66')
  })

  it('should verify the current target temperature is between minimum and maximum temperature', () => {
    render(<App />)
    const targetTemperature = Number((screen.getByPlaceholderText('Target Temperature') as HTMLInputElement).value)
    const minimumTemperature = Number((screen.getByPlaceholderText('Minimum Temperature') as HTMLInputElement).value)
    const maximumTemperature = Number((screen.getByPlaceholderText('Maximum Temperature') as HTMLInputElement).value)
    expect(targetTemperature).toBeLessThanOrEqual(maximumTemperature)
    expect(targetTemperature).toBeGreaterThanOrEqual(minimumTemperature)
  })

  it('should update the target temperature value', async () => {
    render(<App />)
    expect(screen.queryByText('6 °C')).toBe(null)
    const targetTemperatureField = screen.getByPlaceholderText('Target Temperature')
    await user.type(targetTemperatureField, '{backspace}')
    await screen.findByText('6 °C')
  })

})