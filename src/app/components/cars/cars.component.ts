import { Component } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {
  isUpdate: boolean = false;
  idCount: number = 1;

  cars: Car[] = [
    {
      id: 1,
      name: 'Palio',
      montadora: 'Fiat',
      price: 3000,
      year: 2000,
    },
  ];
  car: Car = {} as Car;

  saveCar() {
    if (!this.isUpdate) {
      this.idCount++;
      this.car.id = this.idCount;
      this.cars.push(this.car);
    }
    this.car = {} as Car;
    this.isUpdate = false;
  }
  updateCar(car: Car) {
    this.isUpdate = true;
    this.car = car; 
  }
  removeCar(car: Car) {
    this.cars = this.cars.filter(c => c !== car);

  }
}
