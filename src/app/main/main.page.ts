import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/shared/model/brand';
import { ModalController } from '@ionic/angular';
import { InsertCoinComponent } from '../modal/insert-coin/insert-coin.component';
import { BrandServiceProvider } from '../providers/brand-service/brand-service';
import { CoinServiceProvider } from '../providers/coin-service/coin-service';
import { TransactionServiceProvider } from '../providers/transaction-service/transaction-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  textToUser: string = "";
  brands: Brand[] = [];
  selectBrand: Brand = null;
  coinValue: number = 0;
  returnCoinValue: number = 0;
  isInvalidCoin: boolean = false;
  collectDrinkText: string = '';
  isHaveChange: boolean = true;

  constructor(private modalController: ModalController,
    private brandService: BrandServiceProvider,
    private coinService: CoinServiceProvider,
    private transactionService: TransactionServiceProvider) {
    this.brands = this.brandService.getBrands();
  }

  ngOnInit() {
    this.selectBrand = this.transactionService.getSelectedBrand();
    this.coinValue = this.coinService.getCumulativeCoin();
  }

  async insertCoin() {
    const s = this;
    const modal = await s.modalController.create({
      component: InsertCoinComponent
    });
    modal.onDidDismiss()
      .then((data: any) => {
        s.coinInserted(data.data);
      });
    return await modal.present();
  }

  collectDrink() {
    this.collectDrinkText = '';
  }

  collectChange() {
    this.returnCoinValue = 0;
  }

  coinInserted(value: number) {
    this.isInvalidCoin = false;
    if (value < 0) {
      this.isInvalidCoin = true;
    }
    else {
      this.coinService.insertedCoin(value);
      this.coinValue = this.coinService.getCumulativeCoin();
      if (!!this.selectBrand) {
        if (this.coinValue >= this.selectBrand.price) {
          this.dispenseDrink();
        }
      }
    }
  }

  dispenseDrink() {
    this.returnCoinValue += this.coinValue - this.selectBrand.price;
    this.selectBrand.quantity--;
    if (this.collectDrinkText != '') {
      this.collectDrinkText += '<br>'
    }
    this.collectDrinkText += String(this.selectBrand.name).toUpperCase();
    this.isHaveChange = !!this.coinService.gotChangeAvailable(this.selectBrand.price);
    this.returnCoinValue = this.coinService.getDispenseCoinValue(this.selectBrand.price);
    this.selectBrand = null;
    this.coinValue = 0;
  }

  selectDrink(brand: Brand) {
    this.selectBrand = null;
    this.transactionService.selectingBrand(null);
    if (brand.quantity <= 0) {
      return;
    }
    this.transactionService.selectingBrand(brand);
    this.selectBrand = brand;
    if (this.coinValue >= this.selectBrand.price) {
      this.dispenseDrink();
    }
  }

  terminateTransaction() {
    this.selectBrand = null;
    this.isHaveChange = true;
    this.isInvalidCoin = false;
    this.returnCoinValue += this.coinValue;
    this.coinValue = 0;
    this.coinService.terminateTransaction();
  }
}
