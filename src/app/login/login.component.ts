import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { StorageService } from 'src/shared/services/storage/storage.service';
import { AuthService } from 'src/shared/services/auth/auth.service';
import { LoaderService } from 'src/shared/services/loader/loader.service';
import { UserService } from 'src/shared/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
	
	public form: FormGroup;
	public isSubmitted: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private storage: StorageService,
    private router: Router,
    private authService: AuthService,
    private loader: LoaderService,
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.subscription = new Subscription();
  	this.createForm();
  }

  createForm(){
  	this.form = new FormGroup({
  		email: new FormControl('ds@dsad.com', [Validators.required]),
  		password: new FormControl('dsd', [Validators.required]),
  	});
  }

  get f(){
  	return this.form.controls;
  };

  onSubmit(e){
  	this.isSubmitted = true;
  	e.preventDefault();
  	// stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    let obj = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    };

    this.loader.setLoader(true);
    this.authService.login(obj).subscribe((res:any) => {
      this.loader.setLoader(false);
      this.user.setLoggedIn();
      this.storage.set("user", JSON.stringify(res));
      this.router.navigateByUrl("/");
    }, err => {
      console.log(err);
      this.loader.setLoader(false);
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
