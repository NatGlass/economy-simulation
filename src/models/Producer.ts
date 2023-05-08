import IAgent from './IAgent';
import ProductionFormula from './formulas/Production';

export default class Producer implements IAgent {
  production: number;
  productionCapacity: number;
  productionCost: number;
  price: number;
  labor: number;
  capital: number;
  totalFactorProductivity: number;
  laborElasticity: number;
  capitalElasticity: number;
  markupPercentage: number;

  constructor(
    production: number,
    productionCapacity: number,
    productionCost: number,
    price: number,
    labor: number,
    capital: number,
    totalFactorProductivity: number,
    laborElasticity: number,
    capitalElasticity: number,
    markupPercentage: number,
  ) {
    this.production = production;
    this.productionCapacity = productionCapacity;
    this.productionCost = productionCost;
    this.price = price;
    this.labor = labor;
    this.capital = capital;
    this.totalFactorProductivity = totalFactorProductivity;
    this.laborElasticity = laborElasticity;
    this.capitalElasticity = capitalElasticity;

    // Random markup percentage between 10% and 50% to create variation between producers
    this.markupPercentage = Math.random() * (50 - 10) + 10;
  }

  update(): void {
    // Update the producer's behavior based on market conditions
    this.calculateProduction();
    this.calculatePrice();
    this.investAndGrow();
  }

  calculateProduction(): void {
    this.production = ProductionFormula.calculateOutput(
      this.totalFactorProductivity,
      this.labor,
      this.capital,
      this.laborElasticity,
      this.capitalElasticity
    );
  }

  calculatePrice(): void {
    // Basic Cost-Plus pricing strategy for now
    this.price = this.productionCost * (1 + (this.markupPercentage / 100));
  }

  investAndGrow(): void {
    // Model how producers invest in their businesses to expand production capacity, improve technology, or increase efficiency
  }
}
