import { Component,EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
    outputs: ['onKegSelect'],
    template: `
    <h3>{{ keg.name + " " + "Pints: " + keg.pints + " " + "$" + keg.price}}</h3>
    <h4>{{ keg.brand }}</h4>
    <p>{{ "ABV " + keg.alcoholContent + "%" }}</p>
    <button (click)="kegClicked(keg)">Buy a pint!</button>
     `
})
export class KegComponent {
  public keg: Keg;
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg){
    clickedKeg.pints -= 1;
    return clickedKeg;
  }
}

// [class.selected]="currentKeg === selectedKeg"
