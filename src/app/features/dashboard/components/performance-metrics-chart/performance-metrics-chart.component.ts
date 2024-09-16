import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-performance-metrics-chart',
  standalone: true,
  imports: [BaseChartDirective, MatIconModule],
  templateUrl: './performance-metrics-chart.component.html',
  styleUrl: './performance-metrics-chart.component.scss'
})
export class PerformanceMetricsChartComponent {
  // Data for line chart (portfolio performance)
  performanceData = [
    { data: [100, 120, 90, 140], label: 'Portfolio Performance' }
  ];
  performanceLabels = ['Q1', 'Q2', 'Q3', 'Q4'];

  chartOptions: ChartOptions = {
    responsive: true,
  };

}
