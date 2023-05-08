// Cobb Douglas production function formula
// Y = A * (L ^ alpha) * (K ^ beta)
// Y = output
// A = total factor productivity
// L = labour input
// K = capital input
// alpha = labour elasticity
// beta = capital elasticity

export default class ProductionFormula{
    static calculateOutput(
        totalFactorProductivity: number,
        labour: number,
        capital: number,
        labourElasticity: number,
        capitalElasticity: number
    ): number {
        const labourTerm = Math.pow(labour, labourElasticity);
        const capitalTerm = Math.pow(capital, capitalElasticity);

        const output = totalFactorProductivity * labourTerm * capitalTerm;
        return output;
    }
}