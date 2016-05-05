import { Component,EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';


@Component({
    selector: 'keg-display',
    inputs: ['keg', 'priceyPintClass', 'lowKegClass'],
    outputs: ['onKegSelect'],
    directives: [EditKegDetailsComponent],
    template: `
    <div class="kegInfo {{ priceyPintClass }} ">
        <h3>{{ keg.name + " " + "$" + keg.price}}</h3>
      <div class="beerInfo">
        <h4>{{ keg.brand }}</h4>
        <p class="pintInfo {{ lowKegClass }} ">{{ "Pints: " + keg.pints  }}</p>
        <p>{{ "ABV " + keg.alcoholContent + "%" }}</p>
      </div>
      <div class="buttons">
        <button (click)="buyPint(keg) ">Buy a pint!</button>
        <button id="edit" (click)="editInfo(keg)">Edit</button>
        <edit-keg-details *ngIf="show" [keg]="selectedKeg"></edit-keg-details>
      </div>
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

  buyPint(clickedKeg: Keg): void{
    if(clickedKeg.pints <= 0) {
      clickedKeg.pints === 0;
    } else {
      clickedKeg.pints -= 1;
  }
}
  editInfo(clickedKeg: Keg) :void {
    this.show = !this.show;
    console.log(this.selectedKeg);
    this.selectedKeg = clickedKeg;
    // this.onKegSelect.emit(clickedKeg);
  }

}

// if clickedKeg.pints <= 120 {
//
// }
