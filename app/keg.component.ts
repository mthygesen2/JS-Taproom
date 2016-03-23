import { Component,EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
    outputs: ['onKegSelect'],
    template: `
    <div class="kegInfo" [class.foo]="isClassVisible">
    <h3>{{ keg.name + " " + "Pints: " + keg.pints + " " + "$" + keg.price}}</h3>
    <h4>{{ keg.brand }}</h4>
    <p>{{ "ABV " + keg.alcoholContent + "%" }}</p>
    <button (click)="kegClicked(keg, isClassVisible=true) ">Buy a pint!</button>
    </div>
     `
})
export class KegComponent {
  public keg: Keg;
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg, isClassVisible){
    clickedKeg.pints -= 1;
    isClassVisible = true;
    // isClassVisible= false;
    // if (clickedKeg.pints <= 120) {
    //     isClassVisible = true;
    // } console.log(isClassVisible);
    return clickedKeg;
  }
}

// if clickedKeg.pints <= 120 {
//   document.querySelector('.kegInfo').className += ' foo';
// }
