import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AuthGuard } from './auth-guard.guard';

import { routing } from './app.routing';


import {
  LoginPage,
  MyTicketsPage,
  NewTicketPage,
  EditTicketPage,
  ReportsPage
} from './pages/index';


import {
  Api
} from './services/index';



@NgModule({
  declarations: [
    AppComponent,
    MyTicketsPage,
    LoginPage,
    NewTicketPage,
    EditTicketPage,
    NewTicketPage,
    ReportsPage,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [AuthGuard, Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
