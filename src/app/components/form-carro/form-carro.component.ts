import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-carro',
  standalone: false,
  templateUrl: './form-carro.component.html',
  styleUrl: './form-carro.component.css',
})
export class FormCarroComponent {
  @Input()
  car: Car = {} as Car;

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }
}