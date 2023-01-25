import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/Dashboard/Dashboard.component';
import { ErrorPageComponent } from './components/ErrorPage/ErrorPage.component';
import { EventsComponent } from './components/Events/Events.component';
import { HomeComponent } from './components/Home/Home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "events",
    component: EventsComponent
  },
  {
    path: "errorPath",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
