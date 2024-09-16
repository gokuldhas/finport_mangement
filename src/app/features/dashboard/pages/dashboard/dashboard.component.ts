import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BaseChartDirective } from 'ng2-charts';
import { AssetAllocationChartComponent } from "../../components/asset-allocation-chart/asset-allocation-chart.component";
import { MarketTrendsChartComponent } from "../../components/market-trends-chart/market-trends-chart.component";
import { PerformanceMetricsChartComponent } from "../../components/performance-metrics-chart/performance-metrics-chart.component";
import { InvestmentService } from '../../../../shared/services/investment.service';
import { InvestmentDialogComponent } from '../../../../shared/components/investment-dialog/investment-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective, MatToolbarModule, MatGridListModule, AssetAllocationChartComponent, MarketTrendsChartComponent,
            PerformanceMetricsChartComponent, AssetAllocationChartComponent, MarketTrendsChartComponent, MatButtonModule, MatIconModule, FlexLayoutModule  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(private dialog: MatDialog, private investmentService: InvestmentService) {}

  ngOnInit(): void {
  
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(InvestmentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.investmentService.submitInvestment(result).subscribe(response => {
          console.log(response.message);
        });
      }
    });
  }

}
