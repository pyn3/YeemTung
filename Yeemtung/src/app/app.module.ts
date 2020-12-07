import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { IonicStorageModule } from '@ionic/storage'

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs'
import { HistoryPage } from '../pages/history/history'
import { AnalysisPage } from '../pages/analysis/analysis'
import { MoneyProvider } from '../providers/money/money';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryPage,
    TabsPage,
    AnalysisPage
  ],
  imports: [
    BrowserModule,
    IonicModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    TabsPage,
    AnalysisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MoneyProvider
  ]
})
export class AppModule { }
