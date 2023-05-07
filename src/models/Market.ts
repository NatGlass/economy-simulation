import Consumer from './Consumer';
import Producer from './Producer';
import Government from './Government';

export default class Market {
    consumers: Consumer[] = [];
    producers: Producer[] = [];
    government?: Government ;

    addAgent(agent: Consumer | Producer | Government): void {
        if (agent instanceof Consumer) {
            this.consumers.push(agent)
        } else if (agent instanceof Producer) {
            this.producers.push(agent);
        } else if (agent instanceof Government) {
            this.government = agent;
        }
    }

    updateMarket(): void {
        this.consumers.forEach((consumer) => consumer.update());
        this.producers.forEach((producer) => producer.update());
        this.government?.update();
    }
      // Additional methods to calculate market statistics like GDP, GDP per capita, etc.
}