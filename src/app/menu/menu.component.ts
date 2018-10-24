import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public IsProfesor = true;
  public isLogin = false;
  show = false;

  constructor(private router: Router) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          if (this.router.url.toLowerCase().startsWith('/login') || this.router.url.toLowerCase().startsWith('/register')) {
              this.isLogin = true;
          } else {
              this.isLogin = false;
          }
        }
      });
  }

  ngOnInit() {
  }
}
