import { Injectable } from '@angular/core';

@Injectable()
export class CoinServiceProvider {
  cumulativeCoin: any = {
    '10': {
      store: 13,
      transaction: 0
    },
    '20': {
      store: 0,
      transaction: 0
    },
    '50': {
      store: 0,
      transaction: 0
    },
    '100': {
      store: 0,
      transaction: 0
    },
  }
  constructor() {

  }

  getCumulativeCoin() {
    let total = 0;
    total += (this.cumulativeCoin['10'].transaction * 0.1)
    total += (this.cumulativeCoin['20'].transaction * 0.2)
    total += (this.cumulativeCoin['50'].transaction * 0.5)
    total += (this.cumulativeCoin['100'].transaction * 1)
    return total;
  }

  getCumulativeStoreCoin() {
    let total = 0;
    total += (this.cumulativeCoin['10'].store * 0.1)
    total += (this.cumulativeCoin['20'].store * 0.2)
    total += (this.cumulativeCoin['50'].store * 0.5)
    total += (this.cumulativeCoin['100'].store * 1)
    return total;
  }
  gotChangeAvailable(price) {
    let val = this.getDispenseCoin(price);
    return val[0];
  }

  getMergeCumuCoin() {
    let m10 = this.cumulativeCoin['10'].store + this.cumulativeCoin['10'].transaction;
    let m20 = this.cumulativeCoin['20'].store + this.cumulativeCoin['20'].transaction;
    let m50 = this.cumulativeCoin['50'].store + this.cumulativeCoin['50'].transaction;
    let m100 = this.cumulativeCoin['100'].store + this.cumulativeCoin['100'].transaction;
    return {
      '10': m10,
      '20': m20,
      '50': m50,
      '100': m100
    }
  }

  insertedCoin(value: number) {
    const s = this;
    if (value == 0.1) {
      s.cumulativeCoin['10'].transaction++;
    }
    else if (value == 0.2) {
      s.cumulativeCoin['20'].transaction++;
    }
    else if (value == 0.5) {
      s.cumulativeCoin['50'].transaction++;
    }
    else if (value == 1) {
      s.cumulativeCoin['100'].transaction++;
    }
  }

  getDispenseCoin(price) {
    let total = this.getCumulativeCoin();
    let totalCoinGot = this.getMergeCumuCoin();
    let change = total - price;
    let dispenseCoin = {
      '10': 0,
      '20': 0,
      '50': 0,
      '100': 0,
    }
    while (change > 0.09) {
      if (change >= 1 && totalCoinGot[100] > 0) {
        totalCoinGot[100]--;
        change--;
        dispenseCoin['100']++;
      }
      else if (change >= 0.5 && totalCoinGot[50] > 0) {
        totalCoinGot[50]--;
        change -= 0.5;
        dispenseCoin['50']++;
      }
      else if (change >= 0.2 && totalCoinGot[20] > 0) {
        totalCoinGot[20]--;
        change -= 0.2;
        dispenseCoin['20']++;
      }
      else if (change >= 0.1 && totalCoinGot[10] > 0) {
        totalCoinGot[10]--;
        change -= 0.1;
        dispenseCoin['10']++;
      }
      else {
        return [false, {}];
      }
    }
    return [true, dispenseCoin];
  }

  moveCoinToStore(coins) {
    this.cumulativeCoin[10].store += this.cumulativeCoin[10].transaction - coins[10];
    this.cumulativeCoin[20].store += this.cumulativeCoin[20].transaction - coins[20];
    this.cumulativeCoin[50].store += this.cumulativeCoin[50].transaction - coins[50];
    this.cumulativeCoin[100].store += this.cumulativeCoin[100].transaction - coins[100];
    this.terminateTransaction();
  }

  getDispenseCoinValue(price) {
    let dis = this.getDispenseCoin(price);
    if (!dis[0]) {
      this.moveCoinToStore({
        10: 0,
        20: 0,
        50: 0,
        100: 0
      });
      return 0.00;
    }
    else {
      let cumuCoin = dis[1][10] * 0.1;
      cumuCoin += dis[1][20] * 0.2;
      cumuCoin += dis[1][50] * 0.5;
      cumuCoin += dis[1][100] * 1;
      this.moveCoinToStore(dis[1]);
      return cumuCoin;
    }
  }

  terminateTransaction() {
    this.cumulativeCoin[10].transaction = 0;
    this.cumulativeCoin[20].transaction = 0;
    this.cumulativeCoin[50].transaction = 0;
    this.cumulativeCoin[100].transaction = 0;
  }

  drawStoreCoin() {
    this.cumulativeCoin['10'].store = 0;
    this.cumulativeCoin['20'].store = 0;
    this.cumulativeCoin['50'].store = 0;
    this.cumulativeCoin['100'].store = 0;
  }
}