import IAgent from "./IAgent";

export default class Consumer implements IAgent {
    income: number;
    spending: number;
    propensityToConsume: number;

    constructor(income: number, spending: number, propensityToConsume: number) {
        this.income = income;
        this.spending = spending;
        this.propensityToConsume = propensityToConsume;
    }
    update(): void {
        // Update the consumer's behavior based on market conditions
        this.calculateSpending();
    }
}

