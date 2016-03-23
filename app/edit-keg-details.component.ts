import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3>New Keg</h3>
    <input placeholder="Keg Name" #newName>
    <input placeholder="Keg Brand" #newBrand>
    <input type="number" placeholder="Price per pint" #newPrice>
    <input type="number" placeholder="Alcohol Content" #newAlcoholContent>

    <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholContent)">Edit Keg</button>
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
