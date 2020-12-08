import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { MoneyProvider } from '../../providers/money/money'
import moment from 'moment'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lender: String
  borrower: String
  money: String

  constructor(private toastController: ToastController, private MoneyProvider: MoneyProvider, public navCtrl: NavController) {

  }
  input(lender, borrower, money) {
    this.MoneyProvider.addData(moment().format('YYYY-MM-DD HH:mm:ss'), lender, borrower, money)
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'), lender, borrower, money)
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your data has been saved.',
      duration: 2000
    });
    toast.present();
  }
}
