import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Money } from '../../models/money.model'

/*
  Generated class for the MoneyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoneyProvider {
  private tempURL = 'http://66d994d83950.ngrok.io/'

  constructor(public http: HttpClient) {
    console.log('Hello MoneyProvider Provider');
  }

  addData(time, lender, borrower, money) {
    this.http.post(this.tempURL + 'insertdata', {
      'time': time,
      'lender': lender,
      'borrower': borrower,
      'money': money,
    }).subscribe(data => { console.log(data) })
  }
  getMoney(itemList, pageNumber, event) {

    return this.http.get<Money>(this.tempURL + 'history?number=' + pageNumber.toString()).subscribe(data => {
      console.log(this.tempURL + pageNumber.toString())
      for (let i = 0; i < data['data'].length; i++) {
        itemList.push(data['data'][i])
      }
      if (pageNumber != 0) {
        event.complete()
      }
    });
  }
}
