import React from "react";
import { Chart } from "react-google-charts";

interface WidgetProps {
    targetTemperature: string
    minimumTemperature: string
    maximumTemperature: string
}

export const TemperatureWidget: React.FunctionComponent<WidgetProps> = (props) => {
    const {targetTemperature,minimumTemperature,maximumTemperature} = props
    return (
        <div>
            <Chart
                height={400}
                chartType="Gauge"
                loader={<div></div>}
                data={[
                    ["Label", "Value"],
                    ['°C', Number(targetTemperature)]
                ]}
                options={{
                    min: Number(minimumTemperature),
                    minorTicks: Math.ceil(Number(maximumTemperature)/20),
                    max: Number(maximumTemperature)
                }}
            />
        </div>
    );
};