import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: "",
        loadComponent: () => import('./features/dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: "dashboard",
        loadComponent: () => import('./features/dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: "assert",
        loadComponent: () => import("./features/asset-allocation/pages/asset-allocation/asset-allocation.component").then(m=>m.AssetAllocationComponent)
      },
      {
        path: "market",
        loadComponent: () => import("./features/market-trends/pages/market-trends/market-trends.component").then(m=>m.MarketTrendsComponent)
      },
      {
        path: "performance",
        loadComponent: () => import("./features/performance-metrics/pages/performance-metrics/performance-metrics.component").then(m=>m.PerformanceMetricsComponent)
      },
];
