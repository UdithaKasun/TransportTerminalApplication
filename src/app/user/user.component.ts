import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CardService } from '../shared/services/card.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  name: String = "Uditha Kasun"
  balance: number = 1250.00
  enteredValue: number = 0;
  url: string = ''
  cardNo;

  constructor(
    public router: Router,
    public cardService: CardService
  ) {
    this.url = this.router.url;
    let arr = this.url.split('/');
    this.cardNo = arr[2];
  }

  ngOnInit() {
    this.getCard();
  }

  closeModel(value) {
    value.hide();
  }

  openModel(value, amount) {
    value.show();
    this.enteredValue = amount;
  }

  confirm(value) {
    this.balance = this.balance + this.enteredValue;
    this.closeModel(value);
  }

  add(value, customAmount) {
    this.balance = this.balance + +customAmount.value;
    this.closeModel(value);
  }

  getCard() {
    this.cardService.loadCard()
    .subscribe(data => {
      console.log(data)
    });

  }
}
