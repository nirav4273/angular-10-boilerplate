import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

	private loader = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  setLoader(flag: boolean){
  	this.loader.next(flag);
  }

  getLoader() {
  	return this.loader.asObservable();
  }
}
