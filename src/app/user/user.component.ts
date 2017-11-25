import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId: string;
  passenger: any;
  enteredValue : number;
  constructor(private cardService: CardService,public router: Router) {
    let arr = this.router.url.split('/');
    this.userId = arr[2];
    this.passenger = this.cardService.getCurrentCard();
  }

  ngOnInit() {
   
  }

  ejectCard(){
    this.cardService.storeCurrentCard({});
    this.router.navigate(['/home']);
  }

  loadUser(userId) {
    this.cardService.getCardById(userId)
      .subscribe((data) => {
        this.passenger = data.passenger;
        console.log(this.passenger);
      }, (error) => {
        alert("Error Fetching User...");
      })


  }
  closeModel(value) {
    value.hide();
  }

  openModel(value, amount) {
    value.show();
    this.enteredValue = amount;
  }

  confirm(value) {
    var paymentDetails = {
      amount : this.enteredValue,
      method : {
        type : "CASH"
      }
    }
    this.cardService.topUpCard(this.userId,paymentDetails)
    .subscribe((data) => {
      this.passenger.passenger_card.card_balance += this.enteredValue 
    }, (error) => {
      alert("Error Recharging Account ...");
    })

    this.closeModel(value);
  }

  add(value, customAmount) {
    this.enteredValue = parseFloat(customAmount.value);
    var paymentDetails = {
      amount : this.enteredValue,
      method : {
        type : "CASH"
      }
    }
    this.cardService.topUpCard(this.userId,paymentDetails)
    .subscribe((data) => {
      this.passenger.passenger_card.card_balance += this.enteredValue 
    }, (error) => {
      alert("Error Recharging Account ...");
    })

    this.closeModel(value);
  }

}
