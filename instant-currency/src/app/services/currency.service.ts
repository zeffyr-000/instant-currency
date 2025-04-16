import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://api.frankfurter.dev/v1/currencies';

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}