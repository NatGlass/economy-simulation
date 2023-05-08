import React from 'react';
import { SimulationOutput } from './SimulationOutput';

function App() {
  return (
    <div className="App">
      <SimulationOutput numProducers={10} numConsumers={50} timeSteps={100} />
    </div>
  );
}

export default App;
