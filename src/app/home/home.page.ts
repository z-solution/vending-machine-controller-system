import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MachineryServiceProvider } from '../providers/machinery/machinery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router,
    public machineService: MachineryServiceProvider) { }

  activateCustomerPanel() {
    this.router.navigate(['/main'])
  }

  activateMaintainerPanel() {
    this.router.navigate(['/maintainer'])
  }

  activateMachineryPanel() {
    this.router.navigate(['/machinery'])
  }

  turnOffPower() {
    this.machineService.turnOffPower();
  }
  
  turnOnPower() {
    this.machineService.turnOnPower();
  }
}
