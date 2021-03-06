import { Component, OnInit } from '@angular/core';

import { BrandServiceProvider } from '../providers/brand-service/brand-service';
import { CoinServiceProvider } from '../providers/coin-service/coin-service';
import { Brand } from 'src/shared/model/brand';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-maintainer',
  templateUrl: './maintainer.page.html',
  styleUrls: ['./maintainer.page.scss'],
})
export class MaintainerPage implements OnInit {
  isPasswordValid: boolean = false;
  isPasswordInvalid: boolean = false;
  password: string = '';
  hardcodedPassword: string = "123456";
  selectedDenomination: number;
  numberOfDenominationCoin: number = null;
  brands: Brand[] = [];
  selectedBrand: Brand = null;
  totalCoinValue: number;
  drawCoinValue: number = 0;
  constructor(private brandService: BrandServiceProvider,
    private coinService: CoinServiceProvider,
    private navCtrl: NavController) {

  }

  ngOnInit() {
    this.brands = this.brandService.getBrands();
    this.selectedBrand = new Brand('dummy', 0, null, "");
    this.totalCoinValue = this.coinService.getCumulativeStoreCoin();
  }

  selectDenomination(val) {
    this.selectedDenomination = val;
    this.numberOfDenominationCoin = this.coinService.cumulativeCoin[val * 100].store;
  }

  selectBrand(brand: Brand) {
    this.selectedBrand = brand;
  }

  limitBrandPrice(brand: Brand) {
    if (brand.price < 0) {
      brand.price = 0;
    }
    else if (!brand.price)
      brand.price = 0
  }

  drawCoin() {
    this.drawCoinValue += this.totalCoinValue;
    this.coinService.drawStoreCoin();
    this.totalCoinValue = this.coinService.getCumulativeStoreCoin();
  }

  goBack() {
    this.navCtrl.back()
  }
  collectCash() {
    this.drawCoinValue = 0;
  }
}
