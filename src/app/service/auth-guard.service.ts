import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor() { }

  canActivate(): boolean {
    if (this.UserSession()) {
      return true;
    }
    return false;
  }

  UserSession(): boolean {
    if (localStorage.getItem('UserSession') == "true") {
      return true;
    }
    return false;
  }

  Administrator(): boolean {
    if (localStorage.getItem('Administrator') == "Administrator") {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('UserSession');
    localStorage.removeItem('Administrator');
  }
}
