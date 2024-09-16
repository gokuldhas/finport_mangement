import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-market-trends-chart',
  standalone: true,
  imports: [BaseChartDirective, MatIconModule],
  templateUrl: './market-trends-chart.component.html',
  styleUrl: './market-trends-chart.component.scss'
})
export class MarketTrendsChartComponent {
  // Data for pie chart (asset allocation)
  marketTrendsData = [
    { data: [35, 25, 40], label: 'Market Trends' }
  ];
  marketTrendsLabels = ['Stocks', 'Bonds', 'Real Estate'];

  chartOptions: ChartOptions = {
    responsive: true,
  };
}
