import { Injectable } from '@angular/core';

@Injectable()
export class MachineryServiceProvider {
  lock: boolean = true;
  power: boolean = true;
  constructor() {
  }

  turnOnPower() {
    this.power = true;
  }

  turnOffPower() {
    this.power = false;
  }
}