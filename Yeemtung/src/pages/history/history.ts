import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneyProvider } from '../../providers/money/money'

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  itemListData = [];
  pageNumber = 0
  constructor(public MoneyProvider: MoneyProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.MoneyProvider.getMoney(this.itemListData, 0, "")
    console.log('ionViewDidLoad HistoryPage');
  }

  refresh(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  doInfiniteScroll(event) {
    if (this.pageNumber * 20 == 1020) {
      event.enable(false);
    }
    else {
      this.pageNumber++
      this.MoneyProvider.getMoney(this.itemListData, this.pageNumber * 20, event)
    }
  }
}
