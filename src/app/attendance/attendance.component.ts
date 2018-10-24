import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  classes: any[];
  selectedClas: any;
  displayDialog: boolean;
  sortOptions: SelectItem[];
  sortKey: string;

  sortField: string;

  sortOrder: number;
  attoptions: any [];

  constructor() { }

  ngOnInit() {
    this.classes = [
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

    this.sortOptions = [
      { label: 'Newest First', value: '!Date' },
      { label: 'Oldest First', value: 'Date' },
      { label: 'Name', value: 'Name' }
    ];

  }

  selectClas(event: Event, clas: any) {
    this.selectedClas = clas;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }  else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

onDialogHide() {
    this.selectedClas = null;
}

}
