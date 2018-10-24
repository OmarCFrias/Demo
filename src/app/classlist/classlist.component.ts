import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {

  time = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit() {
  }

}
