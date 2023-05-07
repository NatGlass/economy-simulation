import IAgent from "./IAgent";

export default class Consumer implements IAgent {
    income: number;
    spending: number;

    constructor(income: number, spending: number) {
        this.income = income;
        this.spending = spending;
    }
    update(): void {
            // Update the consumer's behavior based on market conditions
    }
}