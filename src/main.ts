import App from './components/app';
import brands from './data/brands';
import cars from './data/cars';
import models from './data/models';
import CarsCollection from './helpers/cars-collection';

const app = new App('#root');
app.initialize();

const cc = new CarsCollection(cars, models, brands);
const ac = cc.allCars;
console.table(ac);
