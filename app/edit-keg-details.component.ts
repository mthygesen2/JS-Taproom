import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3>Edit Keg</h3>
    <input [(ngModel)]="keg.name" placeholder="Keg Name">
    <input [(ngModel)]="keg.brand" placeholder="Keg Brand">
    <input [(ngModel)]="keg.price" type="number" placeholder="Price per pint">
    <input [(ngModel)]="keg.alcoholContent" type="number" placeholder="Alcohol Content">
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
