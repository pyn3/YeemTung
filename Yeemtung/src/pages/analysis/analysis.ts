import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneyProvider } from '../../providers/money/money'
/**
 * Generated class for the AnalysisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analysis',
  templateUrl: 'analysis.html',
})
export class AnalysisPage {

  public piclink: String

  constructor(public MoneyProvider: MoneyProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalysisPage');
    this.downloadpic(0)
  }
  downloadpic(number) {
    this.piclink = this.MoneyProvider.graph(number)
  }
  refresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  segmentChanged(event) {
    console.log(event._value);
    this.downloadpic(event._value)
  }
}
