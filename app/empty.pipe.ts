import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "empty",
  pure: false
})
export class EmptyPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredEmptyState = args[0];
    if(desiredEmptyState === "low") {
      return input.filter((keg) => {
        return (keg.pints <= 120);
      });
    } else {
      return input;
    }
  }
}


// } else if (desiredEmptyState === "notEmpty") {
//   return input.filter((keg) => {
//     return !keg.empty;
//   });
