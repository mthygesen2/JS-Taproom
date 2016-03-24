import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { EmptyPipe } from './empty.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [EmptyPipe],
  directives: [KegComponent, NewKegComponent, EditKegDetailsComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Kegs with Pints</option>
    <option value="low">Almost empty kegs</option>
    <option value="empty">Empty Kegs</option>
  </select>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  <keg-display *ngFor="#currentKeg of kegList | empty:filterEmpty"
    [keg]="currentKeg" [priceyPintClass]="isExpensive(currentKeg)" [lowKegClass]="isLow(currentKeg)" >
  </keg-display>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterEmpty: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  createKeg([name, brand, price, alcoholContent]): void {

    var newKeg = new Keg(name, brand, price, alcoholContent, this.kegList.length);

    this.kegList.push(newKeg);

  }
  onChange(filterOption) {
    this.filterEmpty = filterOption;
  }
  isExpensive(currentKeg) {
    if(currentKeg.price > 5) {
      return "expensivePint";
    }
  }
  isLow(currentKeg) {
    if(currentKeg.pints <= 25) {
      return "kegIsLow";
    }
  }
}



// (click)="kegClicked(currentKeg)"
// [class.selected]="currentKeg === selectedKeg">
