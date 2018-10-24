import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

import * as moment from 'moment';
    import { Schedule, Message } from 'primeng/primeng';
    import * as $ from 'jquery';
import { MessageService } from 'primeng/components/common/messageservice';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: any[];
  title = 'calendar';
  header: any;

  msgs: Message[] = [];

  constructor(private eventService: EventService, private messageService: MessageService) {}

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
    this.showMultiple();
    // tslint:disable-next-line:member-ordering
  Observable.interval(2000 * 60).subscribe(x => {
    this.showOneMore();
  });
  }

  showMultiple() {
    this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Class 4', detail: '2:30 p.m.'});
        this.msgs.push({severity: 'success', summary: 'Class 5', detail: '4:30 p.m.'});
        this.msgs.push({severity: 'success', summary: 'Conference', detail: '7:00 p.m.'});
  }

  showOneMore() {
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Class 4', detail: '2:30 p.m.'});
  }

  showViaService() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }

  clearViaService() {
      this.messageService.clear();
  }

  clear() {
      this.msgs = [];
  }


}

export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay = true;
}
