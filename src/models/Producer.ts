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
  profits: number;
  investmentPreference: number;
  quantityProduced: number;

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

    this.quantityProduced = 0;

    // Random markup percentage between 10% and 50% to create variation between producers
    this.markupPercentage = Math.random() * (50 - 10) + 10;

    this.profits = 0;
    this.investmentPreference = Math.random(); // Random value between 0 and 1
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

  calculateInvestmentAmount(): number {
    // Calculate the investment amount based on profits and investment preference
    return this.profits * this.investmentPreference;
  }

  investAndGrow(): void {
    const investmentAmount = this.calculateInvestmentAmount();

    // Update the producer's properties based on the amount of investment
    this.labor += investmentAmount * 0.5; // 50% of the investment goes to increasing labor
    this.capital += investmentAmount * 0.5; // 50% of the investment goes to increasing capital

    // Reset profits to zero after investing
    this.profits = 0;

    // Recalculate production capacity and efficiency
    this.calculateProduction();
  }

  sellGoods(): void {
    // Define the inverse demand function: demand = a - b * price
    const a = 100; // Maximum demand at zero price
    const b = 0.5; // Slope of the demand curve

    // Calculate the quantity demanded for the producer's goods at the current price
    const quantityDemanded = Math.max(0, a - b * this.price);

    // Calculate the revenue from selling the goods
    const revenue = this.price * quantityDemanded;

    // Calculate the costs for producing the goods
    const productionCosts = this.productionCost * quantityDemanded;

    // Calculate and update the producer's profits
    this.profits = revenue - productionCosts;

    // Update the quantity produced for this producer
    this.quantityProduced = quantityDemanded;
  }

  update(): void {
    this.calculateProduction();
    this.calculatePrice();
    this.sellGoods();
    this.investAndGrow();
  }
}
