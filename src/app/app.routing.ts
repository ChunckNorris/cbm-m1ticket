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

    { path: '', component: MyTicketsPage  },
    { path: 'home', component: MyTicketsPage },
     { path: 'all', component: MyTicketsPage },
      { path: 'add', component: NewTicketPage },
    { path: 'edit', component: EditTicketPage  }
   // { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(routes);