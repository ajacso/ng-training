import { Component, OnInit } from '@angular/core';

import { User, UserService } from '../../user.barrel';
import { AuthService } from '../../../shared/shared.barrel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public loading: boolean = true;
  public user: User;

  public constructor(private _authService: AuthService, private _userService: UserService) { }

  ngOnInit() {
    console.log(this._authService.user);
    this.loading = false;
  }


  public updatePassword(user: User) {
    this._userService.update(
    user,
    {
        success: updatedPassword => user = updatedPassword,
        error: error => window.alert('Update failed.'),
        //this.onError.emit(),
        //finally: () => this.loading = false
      }
    )
  }

}
