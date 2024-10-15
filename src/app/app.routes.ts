import { Routes } from '@angular/router'
import { HomeComponent } from '../components/home.component'
import { ClockComponent } from '../components/clock.component'

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clock', component: ClockComponent }
];
