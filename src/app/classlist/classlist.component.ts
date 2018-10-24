import { Component, OnInit } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {

  time = {hour: 13, minute: 30};

  display = false;

  classes: any[];

  constructor() { }

  ngOnInit() {

    this.classes =  [
      {
        'Name': 'Class 1',
        'Date': '2018-10-24T08:00:00',
        'Time': '08:00:00'
      }, {
        'Name': 'Class 2',
        'Date': '2018-10-24T08:00:00',
        'Time': '08:00:00'
      }, {
        'Name': 'Class 3',
        'Date': '2018-10-24T08:00:00',
        'Time': '08:00:00'
      }, {
        'Name': 'Class 4',
        'Date': '2018-10-24T08:00:00',
        'Time': '08:00:00'
      }, {
        'Name': 'Class 5',
        'Date': '2018-10-24T08:00:00',
        'Time': '08:00:00'
      }
  ];
  }

  showDialog() {
    this.display = true;
}

}
