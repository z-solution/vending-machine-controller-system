import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/shared/model/brand';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  textToUser: string = "textToUser";
  brands: Brand[] = [];

  constructor() {
    let temp = new Brand('miranda', 5, 0.7, './assets/image/miranda-orange2.jpg')
    this.brands.push(temp);
    temp = new Brand('seven up', 5, 0.7, './assets/image/7-up2.jpg')
    this.brands.push(temp);
    temp = new Brand('pepsi', 5, 0.7, './assets/image/pepsi.jpeg')
    this.brands.push(temp);
    temp = new Brand('fanta', 5, 0.7, './assets/image/fanta-orange2.jpg')
    this.brands.push(temp);
    temp = new Brand('coca-cola', 5, 0.7, './assets/image/coca-cola.jpg')
    this.brands.push(temp);
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter')
  }

}
