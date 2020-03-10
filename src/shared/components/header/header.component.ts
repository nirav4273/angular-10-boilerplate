import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/shared/services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
	
	private isLoggedIn:boolean = false;
	private subscription = new Subscription();

  constructor(private user: UserService) {
  	this.subscription.add(this.user.isLoggedIn.subscribe((res: boolean) => {
  		this.isLoggedIn = res;
  	}));
  }

  ngOnInit(): void {
  }

  logout(){
  	this.user.logout();
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }

}
