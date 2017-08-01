import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
        private route: ActivatedRoute,
        private router: Router) { 
         
        }

newTicket(){
this.router.navigate(['/add']);
}
editTicket(){
this.router.navigate(['/edit']);
}
viewTickets(){
  this.router.navigate(['/all']);
}
}
