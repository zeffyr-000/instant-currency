import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  currencies: any;

  constructor(private currencyService: CurrencyService,
    private platform: Platform) {
    this.initializeApp();
  }

  ngOnInit(): void {
    this.loadCurrencies();
  }

  loadCurrencies(): void {
    this.currencyService.getCurrencies().subscribe(data => {
      this.currencies = data;
    });
  }

  async initializeApp() {
    await this.platform.ready();

    if (this.platform.is('capacitor')) {
      await StatusBar.setBackgroundColor({ color: '#121212' });
      await StatusBar.setStyle({ style: Style.Dark });
      if (this.platform.is('ios')) {
        await StatusBar.setOverlaysWebView({ overlay: true });
      }
    }
  }
}