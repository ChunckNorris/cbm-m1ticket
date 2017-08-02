import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
import { DataTableColumn } from '../../components/datatable/datatable-column'

import {
  Api
} from '../../services/index';

import { Tickets } from '../../models/index';

@Component({
  selector: 'app-my-tickets-page',
  templateUrl: './my-tickets-page.component.html',
  styleUrls: ['./my-tickets-page.component.css']
})
export class MyTicketsPage implements OnInit {
  tickets: Array<Tickets>;
  ticketQueueColumns = [
    { data: 'ticketName', title: 'ticketName' },
    { data: 'categoryID', title: 'category' },
    { data: 'dateCreated', title: 'Date Created' },
    { data: 'departmentOwner', title: 'Department Owner' },
    { data: 'reorderLevel', title: 'Reorder Level' },
    { data: 'daysAssigned', title: 'Days Waiting' }];
  ticketQueueColumnDefs = [
    {
      aTargets: [0],
      data: 'ticketName',
      render: function (data, type, full) {
        '<h6>' + full.ticketName + '<h6>'

      }
    }, {
      aTargets: [1],
      data: 'categoryID',
      render: function (data, type, full) {
        return '<div class="btn btn-default btn-dashboard" id="' + full.categoryID + '" name="categoryID" >View Catagory</div><br>';
      }
    }, {
      aTargets: [2],
      data: 'dateCreated',
      render: function (data, type, full) {
        return '<h6>' + moment(data.dateCreated).format('MMM DD, YYYY') + '<br>' + moment(data.dateCreated).fromNow() + '</h6>';

      }
    },
    {
      aTargets: [3],
      data: 'departmentOwner',
      render: function (data, type, full) {
         '<h6>' + full.departmentOwner + '<h6>'
      }
    },
    {
      aTargets: [4],
      data: 'reorderLevel',
      render: function (data, type, full) {
         '<h6>' + full.reorderLevel + '<h6>'
      }
    },
    {
      aTargets: [5],
      data: 'daysAssigned',
      render: function (data, type, full) {
         '<h6>' + full.daysAssigned + '<h6>'
      }
    }];

  constructor(public api: Api) {
    this.tickets = new Array<Tickets>();


  }

  ngOnInit() {
    this.api.getOpenTickets(1).subscribe(res => {
      this.tickets = res;

    })
  }

}
