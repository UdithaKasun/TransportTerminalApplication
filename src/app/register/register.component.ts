import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  paymentMethods = [];
  show : boolean = false;

  personDetailsForm: FormGroup;
  cardDetailsForm: FormGroup;
  paymentDetailsForm: FormGroup;

  cardDetails : any = {
		passenger_name : "",
		passenger_email : "",
    passenger_phone_number : "",
    passenger_nic : "",
		passenger_payment_details : {
			payment_type : ""
		},
		passenger_card : {
			"card_type" : ""
		}
}

  constructor(private cardService: CardService){
      }

  ngOnInit() {
    this.paymentMethods = [
      {value: 'MASTER', Name: 'Master Card'},
      {value: 'VISA', Name: 'Visa Card'}
    ];

    this.personDetailsForm = new FormGroup({
      nameCtrl: new FormControl('', Validators.required),
      emailCtrl: new FormControl('', Validators.required),
      nicCtrl: new FormControl('', Validators.required),
      phoneCtrl: new FormControl('', Validators.required)
    });

    this.cardDetailsForm = new FormGroup({

    });

    this.paymentDetailsForm = new FormGroup({
      paymentType : new FormControl(''),
      cardNumberCtrl: new FormControl('', Validators.required),
      expiryDateCtrl: new FormControl('', Validators.required),
      cvcCtrl: new FormControl('', Validators.required),
      autoTopupCtrl: new FormControl('', Validators.required)
    });
  }

  setCardType(cardType){
    this.cardDetails.passenger_card.card_type = cardType;
  }

  showData(){
    console.log(this.paymentDetailsForm);
  }

  setData(cardPaymentType){
    this.cardDetails.passenger_name = this.personDetailsForm.get('nameCtrl').value;
    this.cardDetails.passenger_email = this.personDetailsForm.get('emailCtrl').value;
    this.cardDetails.passenger_nic = this.personDetailsForm.get('nicCtrl').value;
    this.cardDetails.passenger_phone_number = this.personDetailsForm.get('phoneCtrl').value;
    this.cardDetails.passenger_phone_number = this.personDetailsForm.get('phoneCtrl').value;
    if(cardPaymentType == "NONE")
    {
      this.cardDetails.passenger_payment_details.payment_type = "NONE";
    }
    else{
      this.cardDetails.passenger_payment_details.payment_type = this.paymentDetailsForm.get('paymentType').value;
      this.cardDetails.passenger_payment_details.payment_card_number = this.paymentDetailsForm.get('cardNumberCtrl').value;
      this.cardDetails.passenger_payment_details.payment_card_expiry_date = this.paymentDetailsForm.get('expiryDateCtrl').value;
      this.cardDetails.passenger_payment_details.payment_card_cvc_number = this.paymentDetailsForm.get('cvcCtrl').value;
      this.cardDetails.passenger_payment_details.payment_card_auto_topup = this.paymentDetailsForm.get('autoTopupCtrl').value;
    }

    this.cardService.registerCard(this.cardDetails)
    .subscribe((data) => {
      alert("Card Added Successfully");
    },(error)=>{
      alert("Drug Adding Failed");
    })

    console.log(this.cardDetails);
    
  }

  toggleView() {
    console.log("Called")
    this.show = !this.show;
  }

}
