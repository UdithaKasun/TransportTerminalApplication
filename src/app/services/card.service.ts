import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {

  constructor(private apiService: ApiService) { }

  // Get Card By Id
  getCardById(cardId : String): Observable<any> {
    return this.apiService.get('/terminal/cards/' + cardId)
    .map(data => {
      return data;
    });
  }

  // Register New Card
  registerCard(card: Object): Observable<any> {
    return this.apiService.post('/terminal/cards', card)
      .map(data => {
        return data;
      });
  }

  // Update Customer
  // updateCustomer(customer: Customer): Observable<any> {
  //   return this.apiService.put('/customer/' + customer.customer_id , { customer : customer })
  //     .map(data => {
  //       return data;
  //     });
  // }

  // // Delete Customer
  // deleteCustomer(customer: Customer): Observable<any> {
  //   return this.apiService.delete('/customer/' + customer.customer_id)
  //     .map(data => {
  //       return data;
  //     });
  // }
}