import IAgent from './IAgent';

export default class Government implements IAgent {
  taxRate: number;
  publicSpending: number;

  constructor(taxRate: number, publicSpending: number) {
    this.taxRate = taxRate;
    this.publicSpending = publicSpending;
  }

  update(): void {
    // Update the government's behavior based on market conditions
  }
}
