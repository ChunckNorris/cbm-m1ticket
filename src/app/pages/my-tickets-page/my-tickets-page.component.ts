import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';


import {
  Api
} from '../../services/index';

import { Tickets} from '../../models/index';

@Component({
  selector: 'app-my-tickets-page',
  templateUrl: './my-tickets-page.component.html',
  styleUrls: ['./my-tickets-page.component.css']
})
export class MyTicketsPage implements OnInit {
    tickets: Array<Tickets>;


  constructor(public api: Api) {
    this.tickets = new Array<Tickets>();
   

   }

  ngOnInit() {
     this.api.getOpenTickets(1).subscribe(res => {
      this.tickets = res;

    })
  }

}
