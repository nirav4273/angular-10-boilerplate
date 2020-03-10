import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from 'src/shared/services/storage/storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	private isUserLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
  	private storage: StorageService,
  	private router: Router
  ) {
  	let user = this.storage.get("user");
  	if(user) {
  		this.isUserLoggedIn.next(true);
  	} else {
  		this.isUserLoggedIn.next(false);
  	}
  }

  logout() {
  	localStorage.clear();
  	this.isUserLoggedIn.next(false);
  	this.router.navigateByUrl("/login");
  }

  setLoggedIn(){
  	this.isUserLoggedIn.next(true);
  }

  get isLoggedIn(){
  	return this.isUserLoggedIn.asObservable();
  }
}
