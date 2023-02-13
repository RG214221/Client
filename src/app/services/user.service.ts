import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import User from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  childrenValid=true;
  private constructor(public http: HttpClient) { }
  baseRouteUrl = `${environment.baseUrl}/User`;
  userDetails: User = new User(null, null, null,[], null, null, null);
  addUser() {
    return this.http.post<User>(`${this.baseRouteUrl}`, this.userDetails);
  }
}
