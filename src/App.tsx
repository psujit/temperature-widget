import './App.css'
import { TemperatureWidget } from './TemperatureWidget.tsx'
import { useState } from 'react'
import { TemperatureSetupForm } from './TemperatureSetupForm.tsx'

function App() {
  const [minimumTemperature, setMinimumTemperature] = useState('0')
  const [maximumTemperature, setMaximumTemperature] = useState('100')
  const [targetTemperature, setTargetTemperature] = useState('66')
  // commented out for now:

  return (
      <div className="main">
        <TemperatureSetupForm
          targetTemperature={targetTemperature}
          minimumTemperature={minimumTemperature}
          maximumTemperature={maximumTemperature}
          setTargetTemperature={setTargetTemperature}
          setMinimumTemperature={setMinimumTemperature}
          setMaximumTemperature={setMaximumTemperature}
        />
        <TemperatureWidget
          targetTemperature={targetTemperature}
          minimumTemperature={minimumTemperature}
          maximumTemperature={maximumTemperature}
        />
        <label className="targetTemperatureLabel">{`${targetTemperature} °C`}</label>
      </div>
  )
}

export default App
