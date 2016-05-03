
import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import {Keg} from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <div class="header">
        <h1>The Taproom</h1>
        <h3> Welcome to the Taproom. Go ahead and add a new keg to the keg list! Or if you are feeling thirsty, go ahead and buy yourself a pint!</h3>
         <h4>Remember that the expensive pints are listed in a nice marigold color.</h4>
         <h4>Buy some pints, eventually you will see low kegs in the list along with empty kegs if you buy enough pints.</h4>
      </div>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>

  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Workhorse IPA", "Laurelwood", 5, 7.5),
      new Keg("Asahi Super Dry", "Asahi", 7, 5),
      new Keg("Mirror Pond", "Deschutes", 4, 6),
      new Keg("Crush Cucumber Sour", "10 Barrel", 6.5, 5),
      new Keg("Good Morning", "Tree House Brewing Company", 8, 8.4),
      new Keg("African Amber", "Mac & Jack's", 4, 5.2),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
