import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardNumber = "";
  passenger: any;

  constructor(
    public router: Router, private cardService: CardService) {

  }

  ngOnInit() {
  }

  loadUser(userId) {
    this.cardService.getCardById(userId)
      .subscribe((data) => {
        if (data.passenger == undefined) {
          alert("Invalid Travel Card");
          return;
        }

        this.passenger = data.passenger;
        this.cardService.storeCurrentCard(this.passenger);
        this.router.navigate(['/user', this.cardNumber]);

      }, (error) => {
        alert("Error Retriving Travel Card Information. Try Again Later...");
      })


  }

  proceed() {
    this.loadUser(this.cardNumber);
  }
}
