import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../user.barrel';
import { ApiService, ApiResponseConfig } from '../../shared/shared.barrel';
import { AuthService } from '../../shared/shared.barrel';

@Injectable()
export class UserService {

  public constructor(private _authService: AuthService, private _http: Http, private _apiService: ApiService) {
    //
  }

  public register(user: User): Observable<Response> {
    return this._http.post(
      environment.apiEndpoint + '/user/register',
      user
    );
  }

  public updatePassword(user: User, responseConfig: ApiResponseConfig): void {
    console.log(user);
    this._apiService.request(
      {
        method: 'Patch',
        url: 'user/' + this._authService.user.id,
        body: user,
      },
      responseConfig
    )
  }

}
