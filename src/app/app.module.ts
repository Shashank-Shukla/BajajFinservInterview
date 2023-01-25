import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSidenavModule, MatTabsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/Dashboard/Dashboard.component';
import { ErrorPageComponent } from './components/ErrorPage/ErrorPage.component';
import { HomeComponent } from './components/Home/Home.component';
import { SidenavComponent } from './components/Sidenav/Sidenav.component';
import * as CanvasJSChart from '../assets/canvasjs.angular.component'
import { EventsComponent } from './components/Events/Events.component';

var CanvasJSAngularChart = CanvasJSChart.CanvasJSChart;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ErrorPageComponent,
    DashboardComponent,
    EventsComponent,
    CanvasJSAngularChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
