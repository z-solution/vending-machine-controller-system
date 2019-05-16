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

}
