import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId : String;
  passenger : any;
  constructor(private cardService : CardService) { 

  }

  ngOnInit() {
    this.userId = "5a18c98edc2bc8480fba2597";
    this.loadUser(this.userId);
  }

  loadUser(userId){
    this.cardService.getCardById(userId)
    .subscribe((data) => {
      this.passenger = data.passenger;
      console.log(this.passenger);
    },(error)=>{
      alert("Error Fetching User...");
    })
  }
}
