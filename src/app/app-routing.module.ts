import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'dashboard',
  component: DashboardComponent,

},
{
  path: '',
  component: LoginComponent
},
{
  path: '**', // defualt url will redirect to the auth page.
  redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
