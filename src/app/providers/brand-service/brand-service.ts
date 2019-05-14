import { Injectable } from '@angular/core';
import { Brand } from 'src/shared/model/brand';

@Injectable()
export class BrandServiceProvider {
  brands: Brand[] = [];

  constructor() {
    let brand = new Brand('miranda', 0, 0.7, '')
    this.brands.push(brand);
    brand = new Brand('seven up', 5, 0.7, '')
    this.brands.push(brand);
    brand = new Brand('pepsi', 5, 0.7, '')
    this.brands.push(brand);
    brand = new Brand('fanta', 5, 0.6, '')
    this.brands.push(brand);
    brand = new Brand('coca-cola', 5, 0.6, '')
    this.brands.push(brand);
  }

  getBrands() {
    return this.brands;
  }

  
}