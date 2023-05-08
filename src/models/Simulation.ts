import Consumer from './Consumer';
import Producer from './Producer';

export default class Simulation {
  producers: Producer[];
  consumers: Consumer[];
  timeSteps: number;

  constructor(numProducers: number, numConsumers: number, timeSteps: number) {
    this.producers = Array.from({ length: numProducers }, () => new Producer(
      Math.random() * 100, // production
      Math.random() * 200, // productionCapacity
      Math.random() * 100, // productionCost
      Math.random() * 150, // price
      Math.random() * 100, // labor
      Math.random() * 100, // capital
      Math.random(), // totalFactorProductivity
      0.5, // laborElasticity
      0.5, // capitalElasticity
      Math.random() * (50 - 10) + 10 // markupPercentage
    ));
    this.consumers = Array.from({ length: numConsumers }, () => new Consumer(
      Math.random() * 10000, // income
      Math.random() * 5000, // spending
      Math.random() * 0.5, // propensityToConsume
      Math.random() * 100, // priceIndex
      [] // preferences
    ));
    this.timeSteps = timeSteps;
  }

  run(): void {
    for (let t = 0; t < this.timeSteps; t++) {
      // Update producers and consumers
      this.producers.forEach(producer => producer.update());
      this.consumers.forEach(consumer => consumer.update());

      // Calculate and display overall statistics
      const gdp = this.calculateGDP();
      const employment = this.calculateEmployment();
      console.log(`Time step ${t}: GDP = ${gdp}, Employment = ${employment}`);
    }
  }

  calculateGDP(): number {
    // Sum the revenues of all producers
    return this.producers.reduce((sum, producer) => sum + producer.price * producer.quantityProduced, 0);
  }

  calculateEmployment(): number {
    // Sum the labor of all producers
    return this.producers.reduce((sum, producer) => sum + producer.labor, 0);
  }

  calculateGDPPerCapita(): number {
    const gdp = this.calculateGDP();
    const population = this.consumers.length;
    return gdp / population;
  }

  update(): void {
    this.producers.forEach(producer => producer.update());
    this.consumers.forEach(consumer => consumer.update());
  }
}


const numProducers = 10;
const numConsumers = 50;
const timeSteps = 100;

const simulation = new Simulation(numProducers, numConsumers, timeSteps);
simulation.run();
