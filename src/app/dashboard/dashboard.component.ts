import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth/auth.service';
import { User } from 'src/shared/models/user';
import { LoaderService } from 'src/shared/services/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	private users:Array<User> = [];

  constructor(
  	private auth: AuthService,
  	private loader: LoaderService
  ) { }

  ngOnInit(): void {
  	this.getUser();
  }

  getUser(): void {
  	this.loader.setLoader(true);
  	this.auth.users().subscribe((res: any) => {
  		this.loader.setLoader(false);
  		if(res.data) {
  			this.users = res.data;
  		}
  	}, err => {
  		this.loader.setLoader(false);
  		console.log(err);
  	})
  }


  get list(): Array<User>{
  	return this.users;
  }

}
