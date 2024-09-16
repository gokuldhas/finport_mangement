import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), importProvidersFrom(BrowserAnimationsModule),  [provideCharts(withDefaultRegisterables())]]
};
