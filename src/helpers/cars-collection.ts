import Car from '../types/car';
import Model from '../types/model';
import Brand from '../types/brand';
import CarJoined from '../types/car-joined';
// type CarsCollectionProps = {

// };

class CarsCollection {
  constructor(private cars: Car[], private models: Model[], private brands: Brand[]) {}

  private joinCar(foundCar: Car): CarJoined {
    const foundModel: Model | undefined = this.models.find((m: Model) => m.id === foundCar.modelId);
    let foundBrand: Brand | undefined;
    if (foundModel) {
      foundBrand = this.brands.find((b: Brand) => b.id === foundModel.brandId);
    }
    // sujungti i viena
    const { modelId, ...restCar } = foundCar;
    const joinedCar: CarJoined = {
      ...restCar,
      brand: foundBrand?.title || 'not found',
      model: foundModel?.title || 'not found',
    };
    return joinedCar;
  }

  get allCars(): CarJoined[] {
    return this.cars.map((c: Car) => this.joinCar(c));
  }
}

export default CarsCollection;
