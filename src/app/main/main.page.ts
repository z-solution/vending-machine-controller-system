import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/shared/model/brand';
import { ModalController } from '@ionic/angular';
import { InsertCoinComponent } from '../modal/insert-coin/insert-coin.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  textToUser: string = "";
  brands: Brand[] = [];
  selectBrand: Brand = null;
  isCoidInserted: boolean = false;
  coinValue: number = 0;
  returnCoinValue: number = 0;

  constructor(private modalController: ModalController) {
    // TODO
    let brand = new Brand('miranda', 0, 0.7, './assets/image/miranda-orange2.jpg')
    this.brands.push(brand);
    brand = new Brand('seven up', 5, 0.7, './assets/image/7-up2.jpg')
    this.brands.push(brand);
    brand = new Brand('pepsi', 5, 0.7, './assets/image/pepsi.jpeg')
    this.brands.push(brand);
    brand = new Brand('fanta', 5, 0.7, './assets/image/fanta-orange2.jpg')
    this.brands.push(brand);
    brand = new Brand('coca-cola', 5, 0.7, './assets/image/coca-cola.jpg')
    this.brands.push(brand);
  }

  ngOnInit() {
  }

  async insertCoin() {
    const s = this;
    if (this.selectBrand !== null) {
      const modal = await s.modalController.create({
        component: InsertCoinComponent
      });
      modal.onDidDismiss()
        .then((data: any) => {
          s.coinInserted(data.data);
        });
      return await modal.present();
    }
  }

  coinInserted(value: number) {
    if (value < 0) {
      this.textToUser = 'COINS NOT VALID';
    }
    else {
      this.coinValue += value;
      if (this.coinValue < this.selectBrand.price) {
        this.textToUser = 'Total ' + this.coinValue.toFixed(2);
      }
      else {
        this.dispenseDrink();
      }
    }
  }

  dispenseDrink() {
    console.log('dispense drink');
    this.returnCoinValue += this.coinValue - this.selectBrand.price;
    this.selectBrand.quantity--;
  }

  selectDrink(brand: Brand) {
    this.selectBrand = null;
    if( brand.quantity <= 0 ){
      this.textToUser = 'Drinks brand not available';
    }
    else if (!this.isCoidInserted) {
      this.selectBrand = brand;
      this.textToUser = 'Insert Coin';
    }
  }
}
