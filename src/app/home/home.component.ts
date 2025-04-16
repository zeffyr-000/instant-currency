import { Component, OnInit } from '@angular/core';
import { CurrencyService, RateData } from '../services/currency.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { swapVerticalOutline, trendingUpOutline } from 'ionicons/icons';
import { CurrencyChartComponent } from '../currency-chart/currency-chart.component';

addIcons({ swapVerticalOutline, trendingUpOutline });

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonIcon,
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonIcon,
    CurrencyChartComponent
  ]
})
export class HomeComponent implements OnInit {
  currencies: { [key: string]: string } = {};
  sourceCurrency: string = localStorage.getItem('sourceCurrency') || 'EUR';
  targetCurrency: string = localStorage.getItem('targetCurrency') || 'USD';
  historicalRates: RateData[] = [];
  currentRate: number = 0;
  rateChange: number = 0;
  isPositiveChange: boolean = false;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencies().subscribe(
      data => {
        this.currencies = data;
        this.loadHistoricalRates();
      }
    );
  }

  loadHistoricalRates() {
    if (this.sourceCurrency && this.targetCurrency) {
      this.currencyService.getHistoricalRates(this.sourceCurrency, this.targetCurrency)
        .subscribe(data => {
          this.historicalRates = data;

          if (data.length >= 2) {
            this.currentRate = data[data.length - 1].value;
            const yesterdayRate = data[data.length - 2].value;
            this.rateChange = ((this.currentRate - yesterdayRate) / yesterdayRate) * 100;
            this.isPositiveChange = this.rateChange >= 0;
          }
        });
    }
  }

  onCurrencyChange() {
    localStorage.setItem('sourceCurrency', this.sourceCurrency);
    localStorage.setItem('targetCurrency', this.targetCurrency);
    this.loadHistoricalRates();
  }

  swapCurrencies() {
    const temp = this.sourceCurrency;
    this.sourceCurrency = this.targetCurrency;
    this.targetCurrency = temp;
    localStorage.setItem('sourceCurrency', this.sourceCurrency);
    localStorage.setItem('targetCurrency', this.targetCurrency);
    this.loadHistoricalRates();
  }
}