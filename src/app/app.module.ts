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

import { ScheduleModule, CalendarModule, GrowlModule, DialogModule } from 'primeng/primeng';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { EventService } from './services/event.service';
import {OrderListModule} from 'primeng/orderlist';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {SpinnerModule} from 'primeng/spinner';

import * as jQuery from 'jquery';
(window as any).jQuery = (window as any).$ = jQuery;
import 'fullcalendar-scheduler';
import { NotificationComponent } from './notification/notification.component';
import { MessageService } from 'primeng/components/common/messageservice';


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
    AttendanceComponent,
    NotificationComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    routing,
    ScheduleModule,
    CalendarModule,
    GrowlModule,
    DialogModule,
    OrderListModule,
    ButtonModule,
    DropdownModule,
    DataViewModule,
    SpinnerModule,
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
    EventService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
