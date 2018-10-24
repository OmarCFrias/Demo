import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './alert/alert.component';
import { routing } from './app.routing';
import { AlertService, AuthenticateService } from './services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthGuard } from './guards/auth.guard';
import { MenuComponent } from './menu/menu.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { FamilyaccountComponent } from './familyaccount/familyaccount.component';
import { OrganizationinfoComponent } from './organizationinfo/organizationinfo.component';
import { AttendanceComponent } from './attendance/attendance.component';

import { ScheduleModule, CalendarModule } from 'primeng/primeng';
import { EventService } from './services/event.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DialogModule} from 'primeng/dialog';
import {OrderListModule} from 'primeng/orderlist';
import {ButtonModule} from 'primeng/button';

import * as jQuery from 'jquery';
(window as any).jQuery = (window as any).$ = jQuery;
import 'fullcalendar-scheduler';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    RegisterComponent,
    MenuComponent,
    ClasslistComponent,
    FamilyaccountComponent,
    OrganizationinfoComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    routing,
    ScheduleModule,
    CalendarModule,
    NgbModule,
    DialogModule,
    OrderListModule,
    ButtonModule,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticateService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    fakeBackendProvider,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
