import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  show : boolean = false;
  constructor() { 

  }

  ngOnInit() {
  }

  toggleView() {
    console.log("Called")
    this.show = !this.show;
  }

}
