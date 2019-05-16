import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) { }

  activateCustomerPanel() {
    this.router.navigate(['/main'])
  }

  activateMaintainerPanel() {
    this.router.navigate(['/maintainer'])
  }

  activateMachineryPanel() {
    this.router.navigate(['/machinery'])
  }
}
