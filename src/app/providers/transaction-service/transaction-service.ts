import { Injectable } from '@angular/core';
import { Brand } from 'src/shared/model/brand';
import { CoinServiceProvider } from '../coin-service/coin-service';

@Injectable()
export class TransactionServiceProvider {
  selectBrand: Brand = null;
  constructor(public coinService: CoinServiceProvider) {
  }

  selectingBrand(brand: Brand) {
    this.selectBrand = brand;
  }

  resetTransaction() {
    this.selectBrand = null;
    this.coinService.terminateTransaction();
  }

  getSelectedBrand() {
    this.resetTransaction();
    return this.selectBrand;
  }
}