import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule,
    routing
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
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
