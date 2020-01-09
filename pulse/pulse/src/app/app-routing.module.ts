import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
// Import canActivate guard services
import { AuthGuard } from "./guard/auth.guard";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SecureInnerPagesGuard } from './guard/secure-inner-pages.guard.ts.guard';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'data', component: DataComponent, canActivate: [SecureInnerPagesGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }