import IAgent from "./IAgent";

export interface Preference {
    producerId: number;
    weight: number;
}

export default class Consumer implements IAgent {
    income: number;
    spending: number;
    propensityToConsume: number;
    priceIndex: number;
    preferences: Preference[];

    constructor(income: number, spending: number, propensityToConsume: number, priceIndex: number, preferences: Preference[]) {
        this.income = income;
        this.spending = spending;
        this.propensityToConsume = propensityToConsume;
        this.priceIndex = priceIndex;
        this.preferences = preferences;
    }

    update(): void {
        // Update the consumer's behavior based on market conditions
        this.calculateSpending();
        this.updateIncome();
    }

    calculateSpending(): void {
        const totalSpending = (this.income * this.propensityToConsume) / this.priceIndex;
        this.spending = this.preferences.reduce((total, preference) => {
          return total + totalSpending * preference.weight;
        }, 0);
      }

    updateIncome(): void {
        // Adjust the consumer's income based on changes in the economy or employment status
      }
}


