import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMetricsChartComponent } from './performance-metrics-chart.component';

describe('PerformanceMetricsChartComponent', () => {
  let component: PerformanceMetricsChartComponent;
  let fixture: ComponentFixture<PerformanceMetricsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceMetricsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceMetricsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
