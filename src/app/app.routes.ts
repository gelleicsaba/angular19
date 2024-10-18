import { Routes } from '@angular/router'
import { HomeComponent } from '../components/home.component'
import { ClockComponent } from '../components/clock.component'
import { SignalsComponent } from '../components/signals.component'

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clock', component: ClockComponent },
    { path: 'signals', component: SignalsComponent }
]
