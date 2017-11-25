import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  show: boolean = false;
  regId: String;
  failed : boolean = true;


  cardDetails: any = {
    passenger_name: "",
    passenger_email: "",
    passenger_phone_number: "",
    passenger_nic: "",
    passenger_payment_details: {
      payment_type: ""
    },
    passenger_card: {
      "card_type": ""
    }
  }

  paymentMethods = [
    { value: 'MASTER', Name: 'Master Card' },
    { value: 'VISA', Name: 'Visa Card' }
  ];

  personDetailsForm = new FormGroup({
    nameCtrl: new FormControl('', Validators.required),
    emailCtrl: new FormControl('', [Validators.required, Validators.email]),
    nicCtrl: new FormControl('', [Validators.required,Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V|v]')]),
    phoneCtrl: new FormControl('', [Validators.required,Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')])
  });

  cardDetailsForm = new FormGroup({

  });

 paymentDetailsForm = new FormGroup({
    paymentType: new FormControl(''),
    cardNumberCtrl: new FormControl('', [Validators.required,Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')]),
    expiryDateCtrl: new FormControl('', [Validators.required]),
    cvcCtrl: new FormControl('', [Validators.required,,Validators.pattern('[0-9][0-9][0-9]')]),
    autoTopupCtrl: new FormControl('', Validators.required)
  });

  constructor(private cardService: CardService,public router : Router) {
  }

  ngOnInit() {
    
  }

  setCardType(cardType) {
    this.cardDetails.passenger_card.card_type = cardType;
  }

  showData() {
    console.log(this.paymentDetailsForm);
  }

  setData(cardPaymentType) {
    this.cardDetails.passenger_name = this.personDetailsForm.get('nameCtrl').value;
    this.cardDetails.passenger_email = this.personDetailsForm.get('emailCtrl').value;
    this.cardDetails.passenger_nic = this.personDetailsForm.get('nicCtrl').value;
    this.cardDetails.passenger_phone_number = this.personDetailsForm.get('phoneCtrl').value;
    this.cardDetails.passenger_phone_number = this.personDetailsForm.get('phoneCtrl').value;
    if (cardPaymentType == "NONE") {
      this.cardDetails.passenger_payment_details.payment_type = "NONE";
    }
    else {
      this.cardDetails.passenger_payment_details.payment_type = this.paymentDetailsForm.get('paymentType').value;
      this.cardDetails.passenger_payment_details.payment_card_number = this.paymentDetailsForm.get('cardNumberCtrl').value;
      this.cardDetails.passenger_payment_details.payment_card_expiry_date = this.paymentDetailsForm.get('expiryDateCtrl').value;
      this.cardDetails.passenger_payment_details.payment_card_cvc_number = this.paymentDetailsForm.get('cvcCtrl').value;
      this.cardDetails.passenger_payment_details.payment_card_auto_topup = this.paymentDetailsForm.get('autoTopupCtrl').value;
    }

    this.cardService.registerCard(this.cardDetails)
      .subscribe((data) => {
        this.regId = data.Id;
        this.failed = false;
      }, (error) => {
        this.failed = true;
      })
  }

  getNameError() {
    return this.personDetailsForm.get('nameCtrl').hasError('required') ? 'You must enter a name'
      : '';
  }

  getEmailError() {
    return this.personDetailsForm.get('emailCtrl').hasError('required') ? 'You must enter a email'
      : this.personDetailsForm.get('emailCtrl').hasError('email') ? 'Not a valid email' : '';
  }

  getNICError() {
    return this.personDetailsForm.get('nicCtrl').hasError('required') ? 'You must enter a NIC Number'
      : this.personDetailsForm.get('nicCtrl').hasError('pattern') ? 'Not a valid NIC Number' : '';
  }

  getTelephoneError() {
    return this.personDetailsForm.get('phoneCtrl').hasError('required') ? 'You must enter a Phone Number'
      : this.personDetailsForm.get('phoneCtrl').hasError('pattern') ? 'Not a valid Phone Number' : '';
  }

  getCreditCardError(){
    return this.paymentDetailsForm.get('cardNumberCtrl').hasError('required') ? 'You must enter a Credit Card Number'
    : this.paymentDetailsForm.get('cardNumberCtrl').hasError('pattern') ? 'Not a valid Credit Card Number' : '';
  }

  getCVCError(){
    return this.paymentDetailsForm.get('cvcCtrl').hasError('required') ? 'You must enter a CVC Number'
    : this.paymentDetailsForm.get('cvcCtrl').hasError('pattern') ? 'Not a valid CVC Number' : '';
  }

  toggleView() {
    console.log("Called")
    this.show = !this.show;
  }

  finishReg(){
    console.log("Clicked");
    this.router.navigate(['/home']);
  }

}
