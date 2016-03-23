import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>New Keg</h3>
    <input placeholder="Keg Name" #newName>
    <input placeholder="Keg Brand" #newBrand>
    <input type="number" placeholder="Price per pint" #newPrice>
    <input type="number" placeholder="Alcohol Content" #newAlcoholContent>

    <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholContent)">Add Keg</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcoholContent: HTMLInputElement) {
    this.onSubmitNewKeg.emit([userName.value, userBrand.value, userPrice.value, userAlcoholContent.value]);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcoholContent.value = "";
  }
}
