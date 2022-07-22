import brands from '../data/brands';
import cars from '../data/cars';
import models from '../data/models';
import CarsCollection from '../helpers/cars-collection';

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
    container.innerHTML = 'Laukiu kol būsiu sukurtas';

    this.htmlElement.append(container);
  };
}

export default App;
