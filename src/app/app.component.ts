import { Component, OnDestroy, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from 'src/shared/services/loader/loader.service';
import { Subscription } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy, AfterContentChecked{
  title = 'base';
  private isLoading: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private translate: TranslateService,
  	private loader: LoaderService,
  	private ref: ChangeDetectorRef
  ) {
  	this.subscription.add(this.loader.getLoader().subscribe((res: boolean) => {
  		this.isLoading = res;
  	}));
    // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');

       // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('en');
  }

  ngAfterContentChecked(){
  	this.ref.detectChanges();
  }

  get loading():boolean {
  	return this.isLoading;
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }

}
