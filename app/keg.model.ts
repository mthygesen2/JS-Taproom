export class Keg {
  public pints: number = 124;
  // public isLow: boolean = false;
  public isEmpty: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public id?: number) {
  }
}

// maybe add public isLow boolean property for when keg is < 10 pints
