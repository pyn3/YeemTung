import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoneyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoneyProvider {
  private tempURL = 'http://0bd3d6f2cdf1.ngrok.io/'

  constructor(public http: HttpClient) {
    console.log('Hello MoneyProvider Provider');
  }

  addData(time, lender, borrower, money) {
    this.http.post(this.tempURL + 'insertdata', {
      'Time': time,
      'Lender': lender,
      'borrower': borrower,
      'Money': money,
    }).subscribe(data => { console.log(data) })
  }
}
