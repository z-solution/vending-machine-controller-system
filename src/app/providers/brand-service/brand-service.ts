import { Injectable } from '@angular/core';
import { Brand } from 'src/shared/model/brand';

@Injectable()
export class BrandServiceProvider {
  brands: Brand[] = [];

  constructor() {
    let brand = new Brand('BRAND 1', 0, 0.7, '')
    this.brands.push(brand);
    brand = new Brand('BRAND 2', 0, 0.7, '')
    this.brands.push(brand);
    brand = new Brand('BRAND 3', 0, 0.7, '')
    this.brands.push(brand);
    brand = new Brand('BRAND 4', 0, 0.6, '')
    this.brands.push(brand);
    brand = new Brand('BRAND 5', 0, 0.6, '')
    this.brands.push(brand);
  }

  getBrands() {
    return this.brands;
  }

  
}