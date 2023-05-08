import React, { useEffect, useState } from 'react';
import Simulation from './models/Simulation';

interface Props {
  numProducers: number;
  numConsumers: number;
  timeSteps: number;
}

export const SimulationOutput: React.FC<Props> = ({ numProducers, numConsumers, timeSteps }) => {
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    const simulation = new Simulation(numProducers, numConsumers, timeSteps);
    const results: string[] = [];

    for (let step = 0; step < timeSteps; step++) {
      simulation.update();
      results.push(`Time step: ${step}`);
      results.push(`GDP: ${simulation.calculateGDP()}`);
      results.push(`GDP per capita: ${simulation.calculateGDPPerCapita()}`);
      results.push('----------------');
    }

    setOutput(results);
  }, [numProducers, numConsumers, timeSteps]);

  return (
    <div>
      {output.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};
