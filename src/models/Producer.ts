import IAgent from './IAgent';

export default class Producer implements IAgent {
  productionCapacity: number;
  productionCost: number;

  constructor(productionCapacity: number, productionCost: number) {
    this.productionCapacity = productionCapacity;
    this.productionCost = productionCost;
  }

  update(): void {
    // Update the producer's behavior based on market conditions
  }
}
