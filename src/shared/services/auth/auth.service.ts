import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpService) { }

  login(body: any){
  	return this.http.post(`login`, body);
  }

  users() {
  	return this.http.get('users');
  }
}
