import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

import * as moment from 'moment';
    import { Schedule } from 'primeng/primeng';
    import * as $ from 'jquery';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: any[];
  title = 'calendar';
  header: any;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = [
      {
        'title': 'Class 1',
        'start': '2018-10-24T08:00:00'
      },
      {
        'title': 'Class 2',
        'start': '2018-10-24T10:00:00'
      },
      {
        'title': 'Class 3',
        'start': '2018-10-24T12:00:00'
      },
      {
          'title': 'Class 4',
          'start': '2018-10-24T14:30:00'
      },
      {
          'title': 'Class 5',
          'start': '2018-10-24T16:30:00'
      },
      {
          'title': 'Conference',
          'start': '2018-10-24T19:00:00'
      }
  ];
    this.header = {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
    };
  }
}

export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay = true;
}
