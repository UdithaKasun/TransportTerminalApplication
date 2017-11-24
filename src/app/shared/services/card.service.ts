import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {

  constructor(private apiService: ApiService) { }

  // Add prescription
  // savePrescription(prescription: Prescription): Observable<any> {
  //   return this.apiService.post('/prescription', { "prescription": prescription })
  //     .map(data => {
  //       return data;
  //     });
  // };

  // Get all prescriptions
  loadCard(): Observable<any> {
    return this.apiService.get('/passengers')
      .map(data => {
        return data;
      });
  }

  // Update prescription
  // updatePrescription(prescription: Prescription): Observable<any> {
  //   return this.apiService.put('/prescription/' + prescription.prescription_id, { "prescription": prescription })
  //     .map(data => {
  //       return data;
  //     });
  // }

  // Delete prescription
  // deletePrescription(prescription: Prescription): Observable<any> {
  //   return this.apiService.delete('/prescription/' + prescription.prescription_id)
  //     .map(data => {
  //       return data;
  //     });
  // }
}
