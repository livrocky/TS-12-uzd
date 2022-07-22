import brands from '../data/brands';
import cars from '../data/cars';
import models from '../data/models';
import CarsCollection from '../helpers/cars-collection';
import MyTable from './table';

class App {
  private htmlElement: HTMLElement;

  private _carsCollection: CarsCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    this._carsCollection = new CarsCollection(cars, models, brands);

    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.htmlElement = foundElement;
  }

  initialize = (): void => {
    const container = document.createElement('div');
    container.className = 'container my-5';
    container.innerHTML = '<h1 class="display-3 mb-3">Automobiliu lentele</h1>';
    const t1 = new MyTable(this._carsCollection.allCars);
    container.append(t1.htmlTable);
    this.htmlElement.append(container);
  };
}

export default App;
