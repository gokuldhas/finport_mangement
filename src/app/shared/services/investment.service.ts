import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  constructor() {}

  submitInvestment(investmentData: any): Observable<any> {
    // Simulate a backend service with a success response
    console.log('Investment data submitted:', investmentData);
    return of({ success: true, message: 'Investment details saved successfully!' });
  }
}
