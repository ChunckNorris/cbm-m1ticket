import { Component, OnInit } from '@angular/core';

import {
  Api
} from '../../services/index';

@Component({
  selector: 'app-my-tickets-page',
  templateUrl: './my-tickets-page.component.html',
  styleUrls: ['./my-tickets-page.component.css']
})
export class MyTicketsPage implements OnInit {
    

  constructor(private api: Api) { }

  ngOnInit() {
  }

}
