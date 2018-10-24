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
        'Name': 'Chemestry',
        'Date': '2018-10-24',
        'Time': '08:00:00',
        'alarm': true,
      }, {
        'Name': 'Ballet',
        'Date': '2018-11-01',
        'Time': '10:00:00',
        'alarm': false,
      }, {
        'Name': 'Math',
        'Date': '2018-11-02',
        'Time': '08:30:00',
        'alarm': true,
      }, {
        'Name': 'Learn Angular',
        'Date': '2018-10-30',
        'Time': '08:30:00',
        'alarm': true,
      }, {
        'Name': 'Music Guitar',
        'Date': '2018-10-26',
        'Time': '09:30:00',
        'alarm': false,
      }, {
        'Name': 'Music Piano',
        'Date': '2018-10-26',
        'Time': '10:00:00',
        'alarm': true,
      }, {
        'Name': 'Music Drums',
        'Date': '2018-10-26',
        'Time': '10:30:00',
        'alarm': false,
      }
  ];
  }

  showDialog() {
    this.display = true;
}

}
