/* eslint-disable @typescript-eslint/comma-dangle */
import Brand from '../types/brand';
import Car from '../types/car';
import CarJoined from '../types/car-joined';
import Model from '../types/model';

// type CarsCollectionProps = {
// };

class CarsCollection {
  constructor(private cars: Car[], private models: Model[], private brands: Brand[]) {}

  private joinCar(carId: string): CarJoined | undefined {
    const foundCar: Car | undefined = this.cars.find((c: Car) => c.id === carId);
    if (!foundCar) return;
    const foundModel: Model | undefined = this.models.find((m: Model) => m.id === foundCar.modelId);
    if (!foundModel) return;
    const foundBrand: Brand | undefined = this.brands.find(
      (b: Brand) => b.id === foundModel.brandId
    );
    if (!foundBrand) return;
    // sujungti i viena
    const { modelId, ...restCar } = foundCar;
    const joinedCar: CarJoined = {
      ...restCar,
      brand: foundBrand.title,
      model: foundModel.title,
    };
    return joinedCar;
  }
}
export default CarsCollection;
