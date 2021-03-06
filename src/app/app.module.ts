import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InsertCoinComponent } from './modal/insert-coin/insert-coin.component';
import { BrandServiceProvider } from './providers/brand-service/brand-service';
import { CoinServiceProvider } from './providers/coin-service/coin-service';
import { MachineryServiceProvider } from './providers/machinery/machinery';
import { TransactionServiceProvider } from './providers/transaction-service/transaction-service';

@NgModule({
  declarations: [AppComponent, InsertCoinComponent],
  entryComponents: [InsertCoinComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    BrandServiceProvider,
    CoinServiceProvider,
    MachineryServiceProvider,
    TransactionServiceProvider,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
