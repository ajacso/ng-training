import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserComponent } from './components/user/user.component';
import { AuthService } from '../shared/services/auth.service';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: ':id', component: UserComponent }
  ])],
  exports: [RouterModule]
})
export class UserRoutingModule {
  //
}
