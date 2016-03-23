import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [NewKegComponent],
  template: `
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  createKeg([name, brand, price, alcoholContent]): void {
    this.kegList.push(
      new Keg(name, brand, price, alcoholContent, this.kegList.length)
    );
  }
}
