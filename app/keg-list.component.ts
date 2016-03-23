import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, NewKegComponent],
  template: `
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  <keg-display *ngFor="#currentKeg of kegList"
    [keg]="currentKeg"
    (click)="kegClicked(currentKeg)"
  [class.selected]="currentKeg === selectedKeg">
  </keg-display>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    clickedKeg.pints -= 1;
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg([name, brand, price, alcoholContent]): void {
    this.kegList.push(
      new Keg(name, brand, price, alcoholContent, this.kegList.length)
    );
  }
}
