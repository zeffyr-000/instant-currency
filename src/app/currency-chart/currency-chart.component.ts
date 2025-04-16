import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartDataset, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { RateData } from '../services/currency.service';

Chart.register(...registerables);

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, BaseChartDirective]
})
export class CurrencyChartComponent {
  @Input() set historicalRates(value: RateData[]) {
    if (value) {
      this._historicalRates = value;
      this.updateChartData();
    }
  }
  @Input() sourceCurrency: string = '';
  @Input() targetCurrency: string = '';

  private _historicalRates: RateData[] = [];
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  chartData: ChartConfiguration['data'] = {
    datasets: [{
      label: 'Exchange Rate',
      data: [] as number[],
      fill: true,
      borderColor: '#1ac8e5',
      backgroundColor: 'rgba(26, 200, 229, 0.5)',
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 4
    } as ChartDataset<'line'>],
    labels: [] as string[]
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 4,
          color: '#ffffff',
          align: 'start',
          padding: 3,
        },
        offset: false
      },
      y: {
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: true,
          drawTicks: true,
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          callback: (value: any) => value.toFixed(4),
          padding: 8,
          color: '#ffffff',
          font: {
            size: 11
          },
          maxTicksLimit: 8
        },
        border: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        align: 'center' as const,
        labels: {
          padding: 15,
          boxWidth: 12,
          color: '#ffffff',
          font: {
            size: 12,
            weight: 500
          }
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        callbacks: {
          label: (context: any) => {
            return `Rate: ${context.parsed.y.toFixed(2)}`;
          }
        }
      }
    }
  };

  private updateChartData() {
    const dates = this._historicalRates.map(rate => {
      const date = new Date(rate.date);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      }).substring(0, 3).toUpperCase();
    });

    this.chartData = {
      datasets: [{
        label: `${this.sourceCurrency}/${this.targetCurrency}`,
        data: this._historicalRates.map(rate => rate.value),
        fill: true,
        backgroundColor: 'rgba(26, 200, 229, 0.5)',
        borderColor: '#1ac8e5',
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4
      } as ChartDataset<'line'>],
      labels: dates
    };

    if (this.chart) {
      this.chart.update();
    }
  }
}