import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { StorageService } from 'src/shared/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate, CanLoad {
  constructor(
    private storage: StorageService,
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user = this.storage.get('user');
    user = user ? JSON.stringify(user) : null;
    if(user) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    let user = this.storage.get('user');
    user = user ? JSON.stringify(user) : null;
    if(user) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
