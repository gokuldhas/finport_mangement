import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-asset-allocation-chart',
  standalone: true,
  imports: [BaseChartDirective, MatIconModule],
  templateUrl: './asset-allocation-chart.component.html',
  styleUrl: './asset-allocation-chart.component.scss'
})
export class AssetAllocationChartComponent {
  portfolioDatasets = [
    { data: [120, 150, 180, 200, 210], label: 'Your Portfolio' },
    { data: [100, 130, 170, 190, 220], label: 'Benchmark' },
  ];

  portfolioLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  chartOptions = {
    responsive: true,
  };
}
