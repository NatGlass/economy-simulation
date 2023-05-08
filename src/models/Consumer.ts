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
        this.adjustIncomeForEmploymentStatus();
        this.adjustIncomeForSalaryRaise();
        this.adjustIncomeForInflation();
      }

    adjustIncomeForEmploymentStatus(): void {
        // Simulate changes in employment status
        const isEmployed = Math.random() < 0.95; // 95% chance of being employed
        if (isEmployed) {
          const baseIncome = 20000; // Base income for employed consumers
          this.income = baseIncome;
        } else {
          this.income = 0;
        }
      }

      adjustIncomeForSalaryRaise(): void {
        // Simulate salary raises and promotions
        const hasSalaryRaise = Math.random() < 0.1; // 10% chance of receiving a salary raise
        if (hasSalaryRaise) {
          const salaryRaisePercentage = Math.random() * (15 - 5) + 5; // between 5-15% salary raise
          this.income *= 1 + salaryRaisePercentage;
        }
      }

      adjustIncomeForInflation(): void {
        // Simulate the effect of inflation on consumer income
        const inflationRate = 0.02; // Base inflation rate of 2%
        this.income /= 1 + inflationRate;
      }
}


