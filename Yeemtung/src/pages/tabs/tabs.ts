import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { HistoryPage } from '../history/history';
import { AnalysisPage } from '../analysis/analysis'
import { MoneyProvider } from '../../providers/money/money'
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AnalysisPage
  tab3Root = HistoryPage;
  constructor() {

  }
}
