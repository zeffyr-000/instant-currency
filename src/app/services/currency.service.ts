import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface HistoricalRatesResponse {
  base: string;
  start_date: string;
  end_date: string;
  rates: {
    [date: string]: {
      [currency: string]: number;
    }
  };
}

export interface RateData {
  date: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://api.frankfurter.dev/v1';

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<{ [key: string]: string }> {
    return this.http.get<{ [key: string]: string }>(`${this.apiUrl}/currencies`);
  }

  getHistoricalRates(base: string, target: string): Observable<RateData[]> {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    return this.http.get<HistoricalRatesResponse>(
      `${this.apiUrl}/${startDate}..${endDate}?from=${base}&to=${target}`
    ).pipe(
      map(response => {
        return Object.entries(response.rates).map(([date, rates]) => ({
          date,
          value: rates[target]
        }));
      })
    );
  }
}