import { Component,EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';


@Component({
    selector: 'keg-display',
    inputs: ['keg'],
    outputs: ['onKegSelect'],
    directives: [EditKegDetailsComponent],
    template: `
    <div class="kegInfo" [class.foo]="isClassVisible">
    <h3>{{ keg.name + " " + "Pints: " + keg.pints + " " + "$" + keg.price}}</h3>
    <h4>{{ keg.brand }}</h4>
    <p>{{ "ABV " + keg.alcoholContent + "%" }}</p>
    <button (click)="buyPint(keg, isClassVisible=true) ">Buy a pint!</button>
    <button (click)="editInfo(keg)">Edit</button>
    <edit-keg-details *ngIf="show" [keg]="selectedKeg"></edit-keg-details>
    </div>
     `
})
export class KegComponent {
  public show: boolean = false;
  public keg: Keg;
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  buyPint(clickedKeg: Keg, isClassVisible) {
    clickedKeg.pints -= 1;
    isClassVisible = true;

    // isClassVisible= false;
    // if (clickedKeg.pints <= 120) {
    //     isClassVisible = true;
    // }

    console.log(isClassVisible);
    return clickedKeg;
  }
  editInfo(clickedKeg: Keg) :void {
    this.show = !this.show;
    console.log(this.selectedKeg);
    this.selectedKeg = clickedKeg;
    // this.onKegSelect.emit(clickedKeg);
  }
}

// if clickedKeg.pints <= 120 {
//   document.querySelector('.kegInfo').className += ' foo';
// }
