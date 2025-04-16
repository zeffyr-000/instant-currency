import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrencyChartComponent } from './currency-chart.component';

describe('CurrencyChartComponent', () => {
  let component: CurrencyChartComponent;
  let fixture: ComponentFixture<CurrencyChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CurrencyChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
