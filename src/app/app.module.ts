import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';


import { AuthGuard } from './auth-guard.guard';

import { routing } from './app.routing';
import { DataTableModule } from "angular2-datatable";
import { Environment } from './app.environment';


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
    routing,
    DataTableModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthGuard, Api, Environment],
  bootstrap: [AppComponent]
})
export class AppModule { }
