import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModifyBarComponent } from './dashboard/modify-bar/modify-bar.component';
import { WeatherWidgetComponent } from './dashboard/weather-widget/weather-widget.component';

@NgModule({
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot([
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent }
      ])
    ],
    declarations: [
      AppComponent,
      TopBarComponent,
      DashboardComponent,
      ModifyBarComponent,
      WeatherWidgetComponent
      
    ],
    bootstrap: [ AppComponent ]
  })
export class AppModule { }