import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: string) {
  	return localStorage.getItem(key) || null;
  }

  set(key: string, data: any) {
  	localStorage.setItem(key, data);
  }
}
