import { Routes, RouterModule } from '@angular/router';
import {
    LoginPage,
    MyTicketsPage,
    NewTicketPage,
    EditTicketPage,
    ReportsPage
} from "./pages/index";
import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [

    { path: '', component: MyTicketsPage, canActivate: [AuthGuard] },
    { path: 'home', component: MyTicketsPage, canActivate: [AuthGuard] },
    { path: 'login', component: LoginPage, data: { breadcrumb: "Log In" } },
    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(routes);