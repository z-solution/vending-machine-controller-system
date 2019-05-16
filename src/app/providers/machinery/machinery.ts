import { Injectable } from '@angular/core';

@Injectable()
export class MachineryServiceProvider {
  lock: boolean = true;
  constructor() {
  }
}