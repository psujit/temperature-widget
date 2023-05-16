import React, { useState } from "react";

interface TemperatureFormProps {
  targetTemperature: string
  minimumTemperature: string
  maximumTemperature: string
  setTargetTemperature: (targetTemperature: string) => void
  setMinimumTemperature: (minimumTemperature: string) => void
  setMaximumTemperature: (maximumTemperature: string) => void
}
export const TemperatureSetupForm: React.FunctionComponent<
  TemperatureFormProps
> = (props) => {
  const {
    targetTemperature,
    minimumTemperature,
    maximumTemperature,
    setTargetTemperature,
    setMinimumTemperature,
    setMaximumTemperature,
  } = props

  const [message, setMessage] = useState<string>('')
  const [showMessage, setShowMessage] = useState<boolean>(false)

  const handleTargetTemperatureChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const changedTargetTemperature = e.target.value
    if (Number(changedTargetTemperature) > Number(maximumTemperature)) {
      setShowMessage(true)
      setMessage('Target Temperature should not be greater than maximum temperature')
    } else if (Number(changedTargetTemperature) < Number(minimumTemperature)) {
      setShowMessage(true)
      setMessage('Target Temperature should not be lesser than minimum temperature')
    } else {
      setTargetTemperature(changedTargetTemperature)
      setShowMessage(false)
    }
  }

  const handleMinimumTemperatureChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const changedMinimumTemperature = e.target.value
    if (Number(changedMinimumTemperature) > Number(maximumTemperature)) {
      setShowMessage(true)
      setMessage('Minimum Temperature should not be greater than maximum temperature')
    } else {
      setMinimumTemperature(changedMinimumTemperature)
      if (Number(changedMinimumTemperature) > Number(targetTemperature)) {
        setShowMessage(true)
        setMessage('Minimum Temperature must be lesser than target temperature. Please update target temperature')
      } else {
        setShowMessage(false)
      }
    }
  }

  const handleMaximumTemperatureChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const changedMaximumTemperature = e.target.value
    if (Number(changedMaximumTemperature) < Number(minimumTemperature)) {
      setShowMessage(true)
      setMessage('Maximum Temperature should not be lesser than minimum temperature')
    } else {
      setMaximumTemperature(changedMaximumTemperature)
      if(Number(changedMaximumTemperature) < Number(targetTemperature)) {
        setShowMessage(true)
        setMessage('Maximum Temperature must be greater than target temperature. Please update target temperature')
      } else{
        setShowMessage(false)
      }
    }
  }

  return (
    <>
      <div className="setupForm">
        <div>
          <label htmlFor="targetTemperature">Target Temperature</label>
          <input
            name="targetTemperature"
            type="number"
            value={targetTemperature}
            min={minimumTemperature}
            max={maximumTemperature}
            onChange={handleTargetTemperatureChange}
            placeholder="Target Temperature"
          />
        </div>
        <div>
          <label htmlFor="minimumTemperature">Minimum Temperature</label>
          <input
            name="minimumTemperature"
            type="number"
            value={minimumTemperature}
            max={Number(maximumTemperature) - 1}
            onChange={handleMinimumTemperatureChange}
            placeholder="Minimum Temperature"
          />
        </div>
        <div>
          <label htmlFor="maximumTemperature">Maximum Temperature</label>
          <input
            name="maximumTemperature"
            type="number"
            value={maximumTemperature}
            min={Number(minimumTemperature) + 1}
            onChange={handleMaximumTemperatureChange}
            placeholder="Maximum Temperature"
          />
        </div>
      </div>
      {showMessage && <div>{message}</div>}
    </>
  )
}
