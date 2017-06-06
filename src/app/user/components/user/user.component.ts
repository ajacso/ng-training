import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserService } from '../../user.barrel';
import { AuthService } from '../../../shared/shared.barrel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public loading: boolean = true;
  public user: User = new User();
  public form = new FormGroup(
    {
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }
  );

  public constructor(private _authService: AuthService, private _userService: UserService) { }

  ngOnInit() {
    this.loading = false;
  }


  public updatePassword(user: User) {
    this._userService.updatePassword(
    this.user,
    {
        success:
        (updatedPassword: Response) => {
          window.alert('Password updated!');
          this.user = new User();
          this.form.reset();
          this.loading = false;
      },
        error: error => window.alert('Update failed.'),
      }
    )
  }

}
