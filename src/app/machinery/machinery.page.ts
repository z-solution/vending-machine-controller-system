import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/shared/model/brand';
import { BrandServiceProvider } from '../providers/brand-service/brand-service';
import { CoinServiceProvider } from '../providers/coin-service/coin-service';
import { MachineryServiceProvider } from '../providers/machinery/machinery';

@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.page.html',
  styleUrls: ['./machinery.page.scss'],
})
export class MachineryPage implements OnInit {
  brands: Brand[] = [];
  coins: any = {};
  constructor(
    private brandSevice: BrandServiceProvider,
    private coinService: CoinServiceProvider,
    public machineryService: MachineryServiceProvider
  ) { }

  ngOnInit() {
    this.brands = this.brandSevice.getBrands();
    this.coins = this.coinService.cumulativeCoin;
  }
  maxLimitBrand(brand: Brand) {
    if (brand.quantity > 10)
      brand.quantity = 10;
    else if (brand.quantity < 0)
      brand.quantity = 0;
    else if (!brand.quantity)
      brand.quantity = 0;
  }
  maxLimit(coins) {
    if (coins.store > 20)
      coins.store = 20;
    else if (coins.store < 0)
      coins.store = 0;
    else if (!coins.store)
      coins.store = 0;
  }

  lockDoor() {
    console.log('1');
    this.machineryService.lock = true;
  }

  unlockDoor() {
    console.log('1');
    this.machineryService.lock = false;
  }
}
