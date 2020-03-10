import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

   handleError(error) {
      return throwError({
        ...error.error,
        code: error.status
      });
  }

  get(url: string){
  	return this.http.get(`${this.API_URL}${url}`).pipe(
      catchError(this.handleError)
    );
  }

  post(url: string, body: any){
  	return this.http.post(`${this.API_URL}${url}`, body).pipe(
      catchError(this.handleError)
    );
  }

  put(url: string, body: any){
  	return this.http.put(`${this.API_URL}${url}`, body).pipe(
      catchError(this.handleError)
    );
  }
  delete(url:string){
  	return this.http.get(`${this.API_URL}${url}`).pipe(
      catchError(this.handleError)
    );
  }
  
}
