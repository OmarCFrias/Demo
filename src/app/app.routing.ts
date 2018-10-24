import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { FamilyaccountComponent } from './familyaccount/familyaccount.component';
import { OrganizationinfoComponent } from './organizationinfo/organizationinfo.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CalendarComponent } from './calendar/calendar.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'calendar', component: CalendarComponent},
    { path: 'classlist', component: ClasslistComponent },
    { path: 'familyaccount', component: FamilyaccountComponent },
    { path: 'organizationinfo', component: OrganizationinfoComponent },
    { path: 'attendance', component: AttendanceComponent },
    { path: 'calendar', component: CalendarComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
