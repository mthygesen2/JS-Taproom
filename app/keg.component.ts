import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
    template: `
    <h3>{{ keg.name + " " + "Pints: " + keg.pints + " " + "$" + keg.price}}</h3>

    <h4>{{ keg.brand }}</h4>
    <p>{{ "ABV " + keg.alcoholContent + "%" }}</p>
     `
})
export class KegComponent {
  public keg: Keg;
  buyPint() {
  
  }
}
