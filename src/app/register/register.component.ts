import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  paymentMethods = [];
  show : boolean = false;
  constructor() { 
    this.paymentMethods = [
      {value: '0', Name: 'Master Card'},
      {value: '1', Name: 'Visa Card'}
    ];
  }

  ngOnInit() {
  }

  toggleView() {
    console.log("Called")
    this.show = !this.show;
  }

}
